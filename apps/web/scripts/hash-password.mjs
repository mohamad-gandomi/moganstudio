import { randomBytes, scrypt } from "node:crypto";
import { promisify } from "node:util";

const password = process.argv[2];
if (!password || password.length < 12) {
  console.error("Pass a password containing at least 12 characters.");
  process.exit(1);
}

const salt = randomBytes(16);
const derived = await promisify(scrypt)(password, salt, 64);
console.log(`scrypt:${salt.toString("hex")}:${derived.toString("hex")}`);
