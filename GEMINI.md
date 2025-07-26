# GEMINI.md

## Monorepo Overview

This repository is a modern TypeScript monorepo managed with [Turborepo](https://turbo.build/repo), using:

- **pnpm** for fast and disk-efficient package management
- **Biome** for linting and formatting (replacing ESLint + Prettier)
- **esbuild** for fast bundling
- **Vite + React** in the frontend app
- **Hono** in the backend API
- **Zod** for schema validation in a shared library

### Project Structure

<root>/
├── apps/
│ ├── client-app/ # React frontend using Vite
│ └── api/ # Hono backend API
├── packages/
│ └── shared/ # Shared library with Zod schemas
├── .biome.json # Biome configuration
├── turbo.json # Turborepo configuration
├── pnpm-workspace.yaml # pnpm workspace definitions
└── tsconfig.base.json # Base TS config


---

## Getting Started

### Prerequisites

- Node.js (>= 22)
- [pnpm](https://pnpm.io) (>= 8)

### Install dependencies

```bash
pnpm install
```

### Workspace setup

pnpm-workspace.yaml:

```yaml
packages:
  - "apps/*"
  - "packages/*"
```