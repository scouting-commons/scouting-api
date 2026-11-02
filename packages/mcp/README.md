# scouting-mcp

**Unofficial MCP server for Scouting America APIs, generated from the [scouting-api](https://github.com/scouting-commons/scouting-api) specs.**

> [!NOTE]
> This project is not affiliated with or endorsed by Scouting America.
>
> Calling these APIs is subject to Scouting America's terms of service, whether you call them using this tool or any other way. Use this tool responsibly and at your own risk.
>
> This tool grants no access beyond what Scouting America already gives you. Every endpoint is either public or unlocked by your own Scouting America credentials, which you must supply for any logged-in operations.
>
> This is not a hosted service. Your requests go straight from your machine to Scouting America- there is no telemetry and we (Scouting Commons) cannot see your data or credentials.

## Install

The server runs locally over stdio. Add it to your MCP client's config:

```json
{
	"mcpServers": {
		"scouting": {
			"command": "npx",
			"args": ["-y", "scouting-mcp"]
		}
	}
}
```

Or with Claude Code:

```sh
claude mcp add scouting -- npx -y scouting-mcp
```

### Claude Desktop

The server is also packaged as a desktop extension (`.mcpb`), which asks for your sign-in when you install it. Build it from the repo root:

```sh
pnpm --filter scouting-mcp build:mcpb
```

Then open `packages/mcp/scouting-mcp.mcpb` with Claude Desktop.

## Sign-in

Without credentials, the server calls public endpoints only. To use endpoints that need a login, set your my.scouting.org username and password as environment variables:

```json
{
	"mcpServers": {
		"scouting": {
			"command": "npx",
			"args": ["-y", "scouting-mcp"],
			"env": {
				"SCOUTING_USERNAME": "your-username",
				"SCOUTING_PASSWORD": "your-password"
			}
		}
	}
}
```

Set both or neither: the server won't start with only one.

## Tools

Each operation in the `api.scouting.org` and `scoutconnect-api.scouting.org` specs is one tool, named by its `operationId` (such as `listMeritBadges`). See the [docs](https://scouting-commons.github.io/scouting-api/) for what each one does.

## Contributing

The tools are generated from the specs, so a wrong field or missing endpoint is fixed in the spec. Issues and pull requests are welcome in the [scouting-api repo](https://github.com/scouting-commons/scouting-api).

Run `pnpm --filter scouting-mcp dev` to try the tools in the [MCP Inspector](https://github.com/modelcontextprotocol/inspector).

## License

[MIT](LICENSE)
