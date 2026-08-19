# Next.js Dashboard

A dashboard application built with the Next.js App Router, React, TypeScript, Tailwind CSS, authentication, validation, and PostgreSQL integration.

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- NextAuth
- Zod
- PostgreSQL
- pnpm

## Getting Started

```bash
pnpm install
pnpm dev
```

The development server is normally available at `http://localhost:3000`.

## Production

```bash
pnpm build
pnpm start
```

## Structure

- `app/` — routes and UI
- `public/` — static assets
- `scripts/` — supporting scripts
- configuration files — framework, styling, and dependency settings

## Configuration

Authentication secrets and database credentials must be supplied through environment variables and should never be committed.

## Status

A dashboard-focused Next.js project for learning and implementing modern App Router patterns.
