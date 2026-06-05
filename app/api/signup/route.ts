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

    const existing = await collection.findOne({ login });
    if (existing) {
      return NextResponse.json({ error: "User already exists." }, { status: 409 });
    }

    const inserted = await collection.insertOne({
      login,
      passwordHash,
      createdAt: new Date(),
      userAgent: request.headers.get("user-agent") || null,
      ip: request.headers.get("x-forwarded-for") || null,
    });

    const token = jwt.sign(
      { login, id: inserted.insertedId.toString() },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    return NextResponse.json(
      {
        success: true,
        message: "Signup successful.",
        id: inserted.insertedId.toString(),
        token,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message || "Unable to process signup." },
      { status: 500 }
    );
  }
}
