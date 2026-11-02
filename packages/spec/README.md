# scouting-api specs

**Unofficial OpenAPI 3.1 descriptions of Scouting America APIs, checked against the live APIs every week.**

## APIs

| API                             | Docs                                                                                   | Spec                                                              |
| ------------------------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `api.scouting.org`              | [Docs](https://scouting-commons.github.io/scouting-api/api.scouting.org/)              | [`openapi.yaml`](apis/api.scouting.org/openapi.yaml)              |
| `auth.scouting.org`             | [Docs](https://scouting-commons.github.io/scouting-api/auth.scouting.org/)             | [`openapi.yaml`](apis/auth.scouting.org/openapi.yaml)             |
| `scoutconnect-api.scouting.org` | [Docs](https://scouting-commons.github.io/scouting-api/scoutconnect-api.scouting.org/) | [`openapi.yaml`](apis/scoutconnect-api.scouting.org/openapi.yaml) |

Before you call an API, read the `info.description` at the top of its spec. It lists the API-wide quirks that change how you need to call it, such as requiring a `Cache-Control: no-cache` header.

## Use a spec

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

See [`CONTRIBUTING.md`](../../CONTRIBUTING.md) for setup and the repo layout.
