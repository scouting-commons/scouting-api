<div align="center">

# scouting-api

**Unofficial OpenAPI descriptions of Scouting America APIs, checked against the live APIs every week.**

[![CI](https://github.com/scouting-commons/scouting-api/actions/workflows/ci.yml/badge.svg)](https://github.com/scouting-commons/scouting-api/actions/workflows/ci.yml)
[![Contract tests](https://github.com/scouting-commons/scouting-api/actions/workflows/contract-tests.yml/badge.svg)](https://github.com/scouting-commons/scouting-api/actions/workflows/contract-tests.yml)
[![OpenAPI 3.1](https://img.shields.io/badge/OpenAPI-3.1-6BA539?logo=openapiinitiative&logoColor=white)](https://spec.openapis.org/oas/v3.1.0)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

[**📖 Browse the docs**](https://scouting-commons.github.io/scouting-api/) · [Report an issue](https://github.com/scouting-commons/scouting-api/issues)

</div>

> [!NOTE]
> This project is not affiliated with or endorsed by Scouting America.
>
> Calling these APIs is subject to Scouting America's terms of service, whether you call them using this tool or any other way. Use this tool responsibly and at your own risk.
>
> This tool grants no access beyond what Scouting America already gives you. Every endpoint is either public or unlocked by your own Scouting America credentials, which you must supply for any logged-in operations.
>
> This is not a hosted service. Your requests go straight from your machine to Scouting America- there is no telemetry and we (Scouting Commons) cannot see your data or credentials.

## Why

Scouting America's APIs have no public documentation. This repo fills the gap with machine-readable [OpenAPI 3.1](https://spec.openapis.org/oas/v3.1.0) specs, so you can read the docs, generate a client, or import an API into your HTTP tool of choice. Every spec is strict: each object schema rejects unknown fields, and contract tests send real requests every week to confirm the spec still matches. See [how the specs stay accurate](packages/spec/README.md#how-the-specs-stay-accurate).

Try an API right away:

```sh
curl -H 'Cache-Control: no-cache' 'https://api.scouting.org/advancements/meritBadges?id=3'
```

## Packages

| Package                                        | Description                                                    | Get it                     |
| ---------------------------------------------- | -------------------------------------------------------------- | -------------------------- |
| [Specs](packages/spec/README.md)               | OpenAPI descriptions of each API, with docs and contract tests | Raw URL per spec           |
| [`scouting-api`](packages/client-ts/README.md) | TypeScript client generated from the specs                     | `npm install scouting-api` |
| [`scouting-mcp`](packages/mcp/README.md)       | MCP server for Scouting America APIs                           | Work in progress           |

## Contributing

Issues and pull requests are welcome, whether it's a missing endpoint, a field that's wrong, or a quirk worth noting. See [`CONTRIBUTING.md`](CONTRIBUTING.md) for setup and the repo layout.

## License

[MIT](LICENSE). This covers the contents of this repository only, not the APIs or their data.
