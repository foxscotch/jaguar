// hooks.server.ts
// https://kit.svelte.dev/docs/hooks
//
// Code here will be executed once on server startup

import { initDataSource } from "$lib/server/orm/setup";

await initDataSource();
