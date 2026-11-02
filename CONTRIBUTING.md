# Contributing

Issues and pull requests are welcome, whether it's a missing endpoint, a field that's wrong, or a quirk worth noting. The full workflow for adding an endpoint, and the rules every spec follows, are in [`AGENTS.md`](AGENTS.md). It's written for AI coding agents, and it reads fine for humans too.

## Setup

Requires Node.js 24+ and pnpm. Run commands from the repository root.

```sh
pnpm install
pnpm dev      # serve the docs at http://localhost:8080
```

| Command          | Description                                                                         |
| ---------------- | ----------------------------------------------------------------------------------- |
| `pnpm dev`       | Serve the docs at http://localhost:8080 and rebuild on change                       |
| `pnpm build`     | Build every package (the docs and the client each go to their package's `dist/`)    |
| `pnpm generate`  | Regenerate the client from the specs, so your editor sees spec changes              |
| `pnpm check`     | Run `format`, `lint`, `typecheck`, and `knip`. Run before committing                |
| `pnpm lint`      | Lint the specs and tests with Redocly, and check every response has a contract test |
| `pnpm format`    | Format all files with Prettier                                                      |
| `pnpm typecheck` | Type-check every package                                                            |
| `pnpm knip`      | Find unused files and dependencies with Knip                                        |
| `pnpm test`      | Run the contract tests against the live API                                         |

> [!WARNING]
> `pnpm test` hits the production APIs. Keep the number of requests small.

CI checks formatting, lints the specs, type-checks every package, runs Knip, and builds the docs and the client on every push to `main` and on pull requests. Pushes to `main` deploy the docs to GitHub Pages.

## Layout

This is a pnpm workspace. Each package lives in `packages/` and owns its own dependencies and scripts. The root holds shared tooling (Prettier, Knip, TypeScript settings, CI), and root scripts run across every package.

```
packages/spec/
├── apis/
│   └── <host>/
│       ├── openapi.yaml        # the spec
│       └── tests.arazzo.yaml   # its contract tests
├── scripts/                    # docs build, dev server, coverage check
├── redocly.yaml                # lint rules and the list of APIs
└── .redocly.lint-ignore.yaml   # deliberate lint exceptions

packages/client-ts/
├── src/
│   ├── index.ts                # root entry point, combining every API
│   ├── <host>.ts               # each API's entry point
│   ├── lib/                    # shared code that isn't an entry point
│   └── generated/              # generated from the specs (gitignored)
├── openapi-ts.config.ts        # which specs to generate from
└── tsdown.config.ts            # builds the npm package

packages/mcp/
├── src/
│   ├── server.ts               # the MCP server every entry shares
│   ├── stdio.ts                # the stdio entry, which npx and the .mcpb run
│   └── tools/                  # tool registration, and the plugin that generates tools
│       └── generated/          # generated from the specs (gitignored)
├── manifest.json               # the .mcpb manifest, minus its version
├── openapi-ts.config.ts        # which specs to generate tools from
└── tsdown.config.ts            # builds the npm package and the .mcpb's server
```

Deliberate exceptions to Redocly's lint rules are listed in `.redocly.lint-ignore.yaml`. Regenerate it with:

```sh
pnpm --filter @scouting-commons/scouting-api-spec exec redocly lint --generate-ignore-file
```

## Releasing

To release a package, bump its `version` in its `package.json` and merge to `main`. The publish workflow publishes every public package whose version isn't on npm yet, and creates a GitHub release tagged `<name>@<version>`, such as `scouting-api@0.5.0`. A `scouting-mcp` release also ships its `.mcpb`, in the npm package and on the GitHub release.

`scouting-mcp` depends on the `scouting-api` version in the repo, so when it needs unreleased client changes, bump both in the same push. The client publishes first.
