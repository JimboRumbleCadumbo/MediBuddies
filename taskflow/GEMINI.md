## Project Overview
This project is a fullstack web application built using Next.js. It includes both frontend and backend functionality in a single codebase, leveraging modern React features, API routes, and server-side capabilities.

---

## Tech Stack
- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS (or your preferred CSS solution)
- Database: PostgreSQL (via Prisma ORM)
- Authentication: NextAuth (or custom JWT-based auth)
- Deployment: Vercel (recommended)

---

## Project Structure
/app # App Router pages, layouts, server components
/components # Reusable UI components
/lib # Utility functions, helpers, configs
/server # Backend logic (optional separation)
/app/api # API routes (route handlers)
/prisma # Database schema and migrations
/public # Static assets
/styles # Global styles

---

## Core Principles

### 1. Fullstack in One Repo
Use Next.js API routes (`/app/api/*`) to handle backend logic such as:
- Authentication
- Database queries
- Business logic

Avoid creating a separate backend unless necessary.

---

### 2. Server vs Client Components
- Default to **Server Components**
- Use `"use client"` only when needed (state, effects, browser APIs)

---

### 3. Data Fetching
Use modern Next.js patterns:
- `fetch()` with caching options
- Server Actions (for mutations)
- Route Handlers for API endpoints

---

### 4. Database Access
Use Prisma for type-safe queries.

Example:
```ts
import { prisma } from "@/lib/prisma";

export async function getUsers() {
  return prisma.user.findMany();
}

---
### 5. Styling

Use Tailwind CSS for rapid UI development.

Guidelines:

Prefer utility classes
Extract reusable components
Keep styles consistent

---

### 6. Environment Variables

Store secrets in .env:

DATABASE_URL=
NEXTAUTH_SECRET=
API_KEYS=

Never expose secrets to the client.

---

### 7. API Routes

Follow this structure:

/app/api/users/route.ts

Example:

```ts
// app/api/users/route.ts
export async function GET(request: Request) {
  // ... logic
}

export async function POST(request: Request) {
  // ... logic
}
```

---

### 8. deployment 

always ask for a double check and approval before pushing to github, vercel, or any other deployment platform.

---
### 9. Best Practices
- Keep components small and reusable
- Use TypeScript everywhere
- Validate inputs on both client and server
- Handle errors gracefully
- Use loading and error states in UI

---
### 10. Folder Structure
- Always organize code in a logical and modular way
- Use descriptive folder and file names
- Group related files together
- Follow the project structure guidelines
- Keep code organized and modular

---

### 11. build

Development Workflow:
- Run Locally:
    - npm install
    - npm run dev
- Build:
    - npm run build
    - npm start

---

## Important Notes
- This is a fullstack project - frontend and backend are in the same codebase
- Leverage Next.js features (App Router, Server Components, API routes)
- Use TypeScript for type safety
- Keep code organized and modular
- Prioritize performance and security