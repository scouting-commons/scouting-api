import { defineConfig } from "tsdown";

// Builds the stdio server twice. It's a program, not a library, so neither
// build has type declarations or package exports.
export default defineConfig([
	// What `npx scouting-mcp` runs. npm installs its dependencies.
	{
		entry: ["src/index.ts"],
		platform: "node",
		publint: true,
	},
	// The server inside the .mcpb bundle, which has no node_modules, so every
	// dependency is bundled in
	{
		entry: ["src/index.ts"],
		platform: "node",
		outDir: "mcpb/server",
		deps: { alwaysBundle: [/.*/], onlyBundle: false },
	},
]);
