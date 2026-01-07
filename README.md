# Deno Monorepo Exemple

Monorepo Deno avec **workspace**, **import map**, **API HTTP**, **CLI**, **lib partagée**,
**tests**, **tâches** et **CI GitHub Actions**.

## Démarrage

```bash
deno task fmt
deno task lint
deno task test

# API
deno task dev:api

# CLI
deno task dev:cli
# ou
deno run -A packages/cli/main.ts Alex 5 7
```
