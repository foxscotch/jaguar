import "reflect-metadata";
import { initDataSource } from "$lib/server/orm/setup";
import type { Handle } from "@sveltejs/kit";
import Session from "$lib/server/orm/models/core/session";
import User from "$lib/server/orm/models/core/user";

await initDataSource();

export const handle: Handle = async ({ event, resolve }) => {
  let session = await Session.getSessionOrNot(event.cookies.get("session_id"));

  event.locals.session = session;
  event.locals.currentUser = session?.user || null;

  return resolve(event);
};
