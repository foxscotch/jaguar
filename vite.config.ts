import typescript from "@rollup/plugin-typescript";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit(), typescript()],
  ssr: { external: ["reflect-metadata"] },
  esbuild: false,
});
