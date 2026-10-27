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
> This project is not affiliated with or endorsed by Scouting America. The specs describe what the APIs actually do, observed by calling them, and may lag behind changes to the APIs.
>
> Calling these APIs is subject to Scouting America's terms of service, whether you call them through these specs or any other way.
>
> The specs grant no access beyond what Scouting America already gives you. Every endpoint is either public or unlocked by your own Scouting America credentials, which you must supply for any logged-in operations.

## Why

Scouting America's APIs have no public documentation. This repo fills the gap with machine-readable [OpenAPI 3.1](https://spec.openapis.org/oas/v3.1.0) specs, so you can read the docs, generate a client, or import an API into your HTTP tool of choice. Every spec is strict about what it describes: each object schema rejects unknown fields, and [contract tests](#how-the-specs-stay-accurate) send real requests to confirm the spec still matches.

## APIs

| API                             | Docs                                                                                   | Spec                                                                            |
| ------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `api.scouting.org`              | [Docs](https://scouting-commons.github.io/scouting-api/api.scouting.org/)              | [`openapi.yaml`](packages/spec/apis/api.scouting.org/openapi.yaml)              |
| `auth.scouting.org`             | [Docs](https://scouting-commons.github.io/scouting-api/auth.scouting.org/)             | [`openapi.yaml`](packages/spec/apis/auth.scouting.org/openapi.yaml)             |
| `scoutconnect-api.scouting.org` | [Docs](https://scouting-commons.github.io/scouting-api/scoutconnect-api.scouting.org/) | [`openapi.yaml`](packages/spec/apis/scoutconnect-api.scouting.org/openapi.yaml) |

## Quick start

Try the API right away:

```sh
curl -H 'Cache-Control: no-cache' 'https://api.scouting.org/advancements/meritBadges?id=3'
```

Before you call an API, read the `info.description` at the top of its spec. It lists the API-wide quirks that change how you need to call it, such as the `Cache-Control` header above.

### Use the TypeScript client

The [`scouting-api`](packages/client-ts/) NPM package is generated from the specs and already handles each API's quirks:

```sh
npm install scouting-api
```

```ts
import { createScoutingClient } from "scouting-api";

const scouting = createScoutingClient({ auth: "none" });

const { data, error } = await scouting.api.advancement.listMeritBadges({
	id: "3",
});
```

See its [README](packages/client-ts/README.md) for more.

### Use a spec

Point your tooling at a spec's raw URL:

```
https://raw.githubusercontent.com/scouting-commons/scouting-api/main/packages/spec/apis/<host>/openapi.yaml
```

For example, generate a TypeScript client with [`openapi-typescript`](https://openapi-ts.dev/):

```sh
npx openapi-typescript https://raw.githubusercontent.com/scouting-commons/scouting-api/main/packages/spec/apis/api.scouting.org/openapi.yaml -o scouting.d.ts
```

The same URL works for importing into Postman, Insomnia, Bruno, or any OpenAPI code generator.

## How the specs stay accurate

- **Observed, not guessed.** Each field, parameter, and error response comes from real responses. A field whose meaning is unknown gets no description rather than a guess.
- **Closed schemas.** Every object schema sets `additionalProperties: false`, so a field the API adds shows up as a test failure.
- **Contract tests.** [Redocly Respect](https://redocly.com/docs/respect) sends real requests and checks every documented status code against the spec. CI runs them every Monday, and on any change to a spec, the tests, or the tooling, with a separate job for each API.
- **Strict linting.** Redocly's `recommended-strict` ruleset plus extra rules, and a coverage check that every documented response has a contract test.

## Contributing

Issues and pull requests are welcome, whether it's a missing endpoint, a field that's wrong, or a quirk worth noting. See [`CONTRIBUTING.md`](CONTRIBUTING.md) for setup and the repo layout.

## License

[MIT](LICENSE). This covers the contents of this repository only, not the APIs or their data.
