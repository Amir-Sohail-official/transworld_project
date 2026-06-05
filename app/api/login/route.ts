import { NextResponse } from "next/server";
export const runtime = "nodejs";
import { createHash } from "crypto";
import clientPromise from "../../../lib/mongodb";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "change_this_in_production";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const login = String(body.login ?? "").trim();
    const password = String(body.password ?? "").trim();

    if (!login || !password) {
      return NextResponse.json({ error: "Login and password are required." }, { status: 400 });
    }

    const passwordHash = createHash("sha256").update(password).digest("hex");

    const client = await clientPromise;
    const db = client.db("transworldusers");
    const collection = db.collection("logins");

    // Check for existing user
    const existing = await collection.findOne({ login });
    if (!existing) {
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }

    // existing.passwordHash may be stored under that key
    const storedHash = (existing as any).passwordHash;
    if (!storedHash || storedHash !== passwordHash) {
      return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
    }

    // Update last login
    await collection.updateOne({ _id: (existing as any)._id }, { $set: { lastLogin: new Date() } });

    // Create a JWT so the frontend can authenticate subsequent requests.
    const token = jwt.sign(
      { login, id: (existing as any)._id.toString() },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    return NextResponse.json(
      {
        success: true,
        message: "Login successful.",
        id: (existing as any)._id.toString(),
        token,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message || "Unable to process login." },
      { status: 500 }
    );
  }
}
