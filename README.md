# 🚀 Graduate Career Hub

A full-stack career management platform for tracking graduate job applications, showcasing portfolio projects, and mapping technical skills.

Built for a graduate software engineering portfolio using **Next.js, TypeScript, Prisma, API Routes, and a database layer**.

## Features

- Full-stack Next.js App Router project
- Application tracker with create and delete functionality
- Database-backed dashboard statistics
- Portfolio project showcase
- Technical skills matrix
- Prisma ORM schema and seed data
- GitHub-ready project structure
- Vercel deployment guide included

## Tech Stack

- Next.js 14
- TypeScript
- React
- Prisma ORM
- SQLite for local development
- PostgreSQL-ready for Vercel production deployment

## Run Locally in VS Code

Open the folder in VS Code, then run:

```bash
npm install
```

Create your local environment file:

```bash
copy .env.example .env
```

Then run the database migration:

```bash
npx prisma migrate dev --name init
```

Add sample data:

```bash
npm run db:seed
```

Start the project:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Useful Commands

```bash
npm run dev        # Start local development server
npm run build      # Build for production
npm run start      # Start production build
npm run db:studio  # Open Prisma Studio database viewer
npm run db:seed    # Add sample data
```

## GitHub Upload

```bash
git init
git add .
git commit -m "Initial commit - Graduate Career Hub"
git branch -M main
git remote add origin https://github.com/junaidmir1212/graduate-career-hub.git
git push -u origin main
```

## Vercel Deployment Note

This project runs locally with SQLite for easy testing. For Vercel production deployment, use PostgreSQL through Neon, Supabase, Railway, or Vercel Postgres.

Read `DEPLOYMENT_GUIDE.md` before deploying.

## Portfolio Positioning

This project demonstrates:

- Full-stack development
- API route design
- Database modelling
- CRUD functionality
- Portfolio-oriented product thinking
- Deployable modern web architecture
