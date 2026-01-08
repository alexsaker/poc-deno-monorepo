# POC Deno Monorepo

## Overview

This project is a production-ready proof of concept leveraging **Deno** as a modern TypeScript
runtime.

Deno offers built-in TypeScript support, enhanced security through granular permissions, and native
support for modern web standards—eliminating the need for complex tooling configurations.

The monorepo code strategy provides several key advantages:

- **Code Sharing**: Centralized shared utilities and types across multiple packages
- **Consistency**: Unified dependency management, linting, and formatting rules
- **Developer Experience**: Single repository to clone, simplified CI/CD pipelines
- **Atomic Changes**: Cross-package refactoring and updates in a single commit
- **Workspace Management**: Deno's native workspace support enables seamless package
  interdependencies

## Project Structure

### 📦 Packages

#### `packages/shared`

Core shared utilities and common code used across all packages. This package exports reusable
functions, types, and constants that maintain consistency throughout the monorepo.

- **Version**: 0.1.1
- **Entry Point**: `mod.ts`

#### `packages/api`

RESTful API server built with Deno's native HTTP server capabilities. Provides backend services and
endpoints for the application.

- **Version**: 0.1.0
- **Entry Point**: `main.ts`
- **Routes**: Modular route definitions in the `routes/` directory

#### `packages/cli`

Command-line interface application for interacting with the project's functionality via terminal.
Demonstrates Deno's capability to build standalone executables.

- **Version**: 0.1.0
- **Entry Point**: `main.ts`

### 📁 Additional Directories

- **`coverage/`**: Test coverage reports in JSON and HTML formats
- **`docs/`**: Auto-generated documentation from source code
- **`git-hooks/`**: Git hooks for code quality enforcement (pre-commit checks)

## Getting Started

### Prerequisites

Ensure you have installed the dev containers extension in VSCode for an optimal development
environment.

You will then be able to run all commands using Deno without needing to install it locally, as the
dev container includes Deno pre-installed.

### Initial Setup

```bash
# Prepare git hooks for code quality enforcement
deno task prepare
```

### Development Commands

```bash
# Format code
deno task fmt

# Lint code
deno task lint

# Run tests with coverage
deno task test

# Run all checks (format check, lint, and tests)
deno task check
```

### Running the API Server

```bash
# Start API in development mode with hot reload
deno task api:dev
```

### Running the CLI

```bash
# Run the CLI in development mode
deno task cli:dev

# Or run directly with arguments
deno run -A packages/cli/main.ts Alex 5 7

# Compile CLI to standalone executable
deno task cli:compile
# Output will be in: dist/cli
```

### Version Management

```bash
# Create a conventional commit
deno task commit

# Bump workspace versions and create release notes
deno task bump-workspaces

# Create a release with automatic versioning
deno task release
```

### Security & Dependencies

```bash
# Audit dependencies for security vulnerabilities
deno task audit
```

### Environment Configuration

If your project requires environment variables, create a `.env` file in the root directory. The
`bump-workspaces` task automatically loads environment variables from `.env` when executed.

Refer to the `.env.example` file for the required variables and their descriptions.
