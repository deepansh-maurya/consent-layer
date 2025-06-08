import { createHash } from "crypto";
import { randomBytes, pbkdf2Sync } from "crypto";

// Generates salt and hashes the password
export function hashPassword(password: string): { hash: string, salt: string } {
  const salt = randomBytes(16).toString("hex"); // Generate a random salt
  const hash = pbkdf2Sync(password, salt, 100000, 64, "sha512").toString("hex");
  return { hash, salt };
}

// To verify a password:
export function verifyPassword(password: string, salt: string, hash: string): boolean {
  const newHash = pbkdf2Sync(password, salt, 100000, 64, "sha512").toString("hex");
  return hash === newHash;
}

export function hashApiKey(key: string): string {
  return createHash("sha256").update(key).digest("hex");
}
