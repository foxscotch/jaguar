import User from "$lib/server/orm/models/core/user";
import type { LayoutServerLoad } from "./$types";

export const load = (async () => {
  return { currentUser: (await User.findOneBy({ id: 2 }))?.serializable() };
}) satisfies LayoutServerLoad;
