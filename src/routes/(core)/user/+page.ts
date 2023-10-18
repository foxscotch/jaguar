import type { PageLoad } from "./$types";

export const load = (async () => {
  return { x: 12 };
}) satisfies PageLoad;
