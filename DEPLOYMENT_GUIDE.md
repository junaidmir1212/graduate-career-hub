# Graduate Career Hub — Deployment Guide

## 1. Local VS Code Run

```bash
npm install
copy .env.example .env
npx prisma migrate dev --name init
npm run db:seed
npm run dev
```

Open:

```text
http://localhost:3000
```

## 2. Push to GitHub

Create a new GitHub repository called:

```text
graduate-career-hub
```

Then run:

```bash
git init
git add .
git commit -m "Initial commit - Graduate Career Hub"
git branch -M main
git remote add origin https://github.com/junaidmir1212/graduate-career-hub.git
git push -u origin main
```

## 3. Vercel Deployment

### Important

The included default Prisma schema uses SQLite so you can run the app locally without setting up a cloud database.

For a real Vercel production database, create a PostgreSQL database using one of these:

- Neon
- Supabase
- Railway
- Vercel Postgres

Then update `prisma/schema.prisma`:

Change:

```prisma
provider = "sqlite"
```

To:

```prisma
provider = "postgresql"
```

Then add this environment variable in Vercel:

```env
DATABASE_URL="your_postgresql_connection_string"
```

## 4. Deploy on Vercel

1. Go to Vercel
2. Add New Project
3. Import your GitHub repo
4. Add `DATABASE_URL` in Environment Variables
5. Deploy

## 5. Production Migration

After changing to PostgreSQL, run locally once with your production database URL:

```bash
npx prisma migrate deploy
```

Then redeploy on Vercel.

## Recommended Portfolio Use

Keep your current portfolio link separate. This project should have its own Vercel link, for example:

```text
graduate-career-hub.vercel.app
```

Then add it to your existing portfolio as a featured full-stack project.
