# Next.js Dashboard

A dashboard application built with the Next.js App Router and TypeScript.

## Overview

This repository is based on the Next.js App Router dashboard project and contains a structured dashboard application with an `app/` directory, public assets, reusable configuration, and supporting scripts.

## Technology Stack

- Next.js 15.0.0 RC
- React 19 RC
- TypeScript 5.5
- Tailwind CSS 3.4
- NextAuth 5 beta
- Zod
- bcrypt
- `@vercel/postgres`
- pnpm

The project requires Node.js `>=20.12.0`.

## Repository Structure

```text
.
├── app/                 # App Router routes and UI
├── public/              # Static assets
├── scripts/             # Supporting scripts
├── next.config.mjs      # Next.js configuration
├── tailwind.config.ts   # Tailwind configuration
├── package.json         # Dependencies and scripts
└── pnpm-lock.yaml       # Locked dependencies
```

## Development

Install dependencies with pnpm and start the development server:

```bash
pnpm install
pnpm dev
```

Create a production build:

```bash
pnpm build
pnpm start
```

The development server is normally available at `http://localhost:3000`.

## Authentication & Data

The project includes NextAuth and bcrypt for authentication-related functionality and `@vercel/postgres` for PostgreSQL access. Keep authentication secrets and database credentials in environment variables rather than source control.

## Validation

Zod is included for runtime schema validation, helping validate application inputs at API or server boundaries.

## Project Status

This repository is a dashboard application/course implementation using the Next.js App Router with a modern TypeScript and Tailwind CSS stack.
