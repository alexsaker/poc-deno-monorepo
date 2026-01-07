# POC Deno Monorepo 

## Overview

The aim of this POC is to create a production ready code base using deno as typescript runtime.

## Useful Commands

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
