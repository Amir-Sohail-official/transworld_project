import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
if (!uri) {
  throw new Error("Missing MONGO_URI environment variable.");
}

const globalWithMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

const client = new MongoClient(uri);
const clientPromise = globalWithMongo._mongoClientPromise ?? (globalWithMongo._mongoClientPromise = client.connect());

export default clientPromise;
