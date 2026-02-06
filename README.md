# Konstantin Solutions – Web & AI Services Platform

Production-ready web platform powering Konstantin Solutions, a software consultancy providing web development and AI automation services for businesses.

---

## Overview

This repository contains the codebase used to run the public business website and supporting backend services.
It is built with a production-first mindset, focusing on reliability, maintainability, and real-world deployment.

---

## Tech Stack

- **Frontend**: Next.js (React, TypeScript)
- **Backend**: NestJS (Node.js, TypeScript)
- **Database**: PostgreSQL (Docker)
- **ORM**: Prisma (schema management & migrations)
- **Cache**: Redis (Docker, planned)
- **Monorepo**: Turborepo
- **Tooling**: TypeScript, ESLint, Prettier

---

## Repository Structure

```text
apps/
  web/        # Next.js frontend
  api/        # NestJS backend API
packages/
  ui/         # Shared UI components (optional)
  eslint-config/
  typescript-config/
docker-compose.yml
turbo.json
```
## Architecture Overview
```
Browser
  ↓
Next.js (apps/web)
  ↓ HTTP / GraphQL
NestJS API (apps/api)
  ↓ Prisma
PostgreSQL (Docker)
```
## Local Development

Prerequisites:
```
Node.js 18+
Docker + Docker Compose
Start infrastructure (database)
docker compose up -d
Install dependencies
npm install
Start frontend and backend
npm run dev
Turborepo orchestrates both applications in parallel for a fast development workflow.
```

## Database & Migrations

```
PostgreSQL runs locally in Docker. Prisma is used for schema management and database access.
cd apps/api
npx prisma migrate dev
npx prisma studio
All schema changes are versioned and committed to ensure reproducible environments.
```

## Build & Development (Turborepo)

```
To build all apps and packages:
npx turbo build
To run all apps in development mode:
npx turbo dev
To run a specific app:
npx turbo dev --filter=web
npx turbo build --filter=api
```

## Tooling & Monorepo

```
This repository uses Turborepo to manage multiple applications and shared packages efficiently.
Key benefits:
unified scripts for development and builds
shared TypeScript and ESLint configuration
incremental builds and task caching
clean separation between frontend, backend, and shared code
Common configurations live in packages/ and are reused across all apps.
```

## Project Status

```
This codebase is actively maintained and used in production to support Konstantin Solutions client work:

🚧 In active development
Planned additions include:
Admin authentication
CRUD management for client's content
Redis-based caching
CI/CD pipeline
Cloud deployment (Azure)
```
