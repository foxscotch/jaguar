/**
 * Could probably do with some refactoring, in the long term. Support for
 * upgrading the hash algorithm or options could be valuable in particular.
 */

import argon2 from "argon2";
import { env } from "$env/dynamic/private";

/** Secret passed to argon2 for its version of peppering. */
const PEPPER_SECRET_BUFFER = Buffer.from(env.PEPPER_SECRET as string);

/**
 * Argon2id parameters {@link https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#argon2id as suggested by OWASP}.
 * The type closely matches {@link argon2.Options}, but it isn't defined as such
 * because of silly issues with the type-overloaded {@link argon2.hash}.
 * */
const options = {
  type: argon2.argon2id,
  memoryCost: 19456,
  timeCost: 2,
  parallelism: 1,
  secret: PEPPER_SECRET_BUFFER,
};

/** Hash password with argon2. */
export async function hashPassword(password: string) {
  return await argon2.hash(password, options);
}

/** Check password against existing hashed password. */
export async function checkPassword(password: string, hash: string) {
  return await argon2.verify(password, hash, { secret: PEPPER_SECRET_BUFFER });
}
