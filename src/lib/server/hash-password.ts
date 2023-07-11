import argon2 from "argon2";
import { env } from "$env/dynamic/private";

// Argon2id paramters suggested by OWASP:
// https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#argon2id
const options = {
  type: argon2.argon2id,
  memoryCost: 19456,
  timeCost: 2,
  parallelism: 1,
  secret: Buffer.from(env.PEPPER_SECRET as string),
};

export async function hashPassword(password: string) {
  return await argon2.hash(password, options);
}

export async function checkPassword(password: string, hash: string) {
  return await argon2.verify(password, hash);
}
