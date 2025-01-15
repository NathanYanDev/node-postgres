import postgres from "postgres";
import "dotenv/config";

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) {
	throw new Error("DATABASE_URL is not defined");
}

export const sql = postgres(DATABASE_URL, { ssl: "require" });
