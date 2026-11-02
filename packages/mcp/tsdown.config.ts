import { defineConfig } from "tsdown";

// Builds the stdio server that `npx scouting-mcp` runs. It's a program, not a
// library, so there are no type declarations or package exports.
export default defineConfig({
	entry: ["src/index.ts"],
	platform: "node",
	publint: true,
});
