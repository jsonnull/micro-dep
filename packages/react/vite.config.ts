import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react()],
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: ["./vitest.setup.ts"],
		typecheck: {
			tsconfig: "./tsconfig.test.json",
		},
		exclude: ["**/node_modules/**", "**/dist/**", "**/dist-test/**"],
	},
});
