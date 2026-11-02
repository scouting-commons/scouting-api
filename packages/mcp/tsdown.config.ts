import { writeFile } from "node:fs/promises";
import { defineConfig } from "tsdown";
import manifest from "./manifest.json" with { type: "json" };
import pkg from "./package.json" with { type: "json" };

// Builds the stdio server twice. It's a program, not a library, so neither
// build has type declarations or package exports.
export default defineConfig([
	// What `npx scouting-mcp` runs. npm installs its dependencies.
	{
		entry: ["src/index.ts"],
		platform: "node",
		publint: true,
	},
	// The .mcpb bundle's contents. Its server has no node_modules, so every
	// dependency is bundled in, and its manifest gets the package's version.
	{
		entry: ["src/index.ts"],
		platform: "node",
		outDir: "mcpb/server",
		deps: { alwaysBundle: [/.*/], onlyBundle: false },
		onSuccess: () =>
			writeFile(
				"mcpb/manifest.json",
				`${JSON.stringify({ ...manifest, version: pkg.version }, null, "\t")}\n`,
			),
	},
]);
