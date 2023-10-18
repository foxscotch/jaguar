import User from "$lib/server/orm/models/core/user";
import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load = (async () => {
  return { y: 14 };
}) satisfies PageServerLoad;

export const actions: Actions = {
  async createUser({ request }) {
    const data = await request.formData();
    const user = new User();

    user.username = data.get("username") as string;
    user.superuser = false;

    const password = data.get("password") as string;
    const passwordConfirmation = data.get("passwordConfirmation") as string;

    if (
      password === null ||
      passwordConfirmation === null ||
      password !== passwordConfirmation
    )
      return fail(400, { nonMatchingPasswords: true });

    await user.setPassword(password);

    await user.save();
  },
};
