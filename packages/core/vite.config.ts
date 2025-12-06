import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		environment: "node",
		globals: true,
		typecheck: {
			tsconfig: "./tsconfig.test.json",
		},
		exclude: ["**/node_modules/**", "**/dist/**", "**/dist-test/**"],
	},
});
