import User from "$lib/server/orm/models/core/user";
import type { LayoutServerLoad } from "./$types";

export const load = (async ({ locals }) => {
  return { currentUser: locals.currentUser };
}) satisfies LayoutServerLoad;
