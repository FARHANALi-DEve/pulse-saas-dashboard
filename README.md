# Pulse — Full-stack SaaS Dashboard

Editable source for the Pulse dashboard, prepared for your own GitHub repository.

## What is included

- Responsive React dashboard with overview, analytics, customers, subscriptions and settings.
- Server API with authenticated, user-scoped database access and input validation.
- Cloudflare D1 / SQLite database schema and Drizzle migration.
- Add/delete customers, search, CSV export, workspace settings and saved plan selection.
- Clearly separated sample data and real saved customer data.
- Starter, Pro and Business plan UI with monthly/yearly prices.

**Current scope:** plan selection is saved, but there is no Stripe/other payment integration, recurring charging, invoice generation or paid-feature enforcement. Revenue is estimated from customer plan records, not actual payment receipts. Sample data is illustrative.

## Technology

TypeScript, React 19, Vinext (Next.js App Router API compatibility on Vite), Cloudflare Workers, D1/SQLite, Drizzle ORM and Lucide icons. This is not a conventional Next.js/Vercel deployment.

## Local setup (Windows, macOS or Linux)

Install Node.js 22.13 or newer. Extract the ZIP and open a terminal inside `pulse-saas-dashboard`.

```sh
npm install
npm run build
npm run db:setup
npm run dev
```

Open the local URL printed by the development server (normally `http://localhost:5173`). The initial build creates the Wrangler configuration used by the database setup command.

`db:setup` applies the initial schema to your local database. Run it once for a new local database, not on every start. Local data lives in ignored `.wrangler/` state and is separate from the hosted database. To reset your local data, stop the server, remove `.wrangler/`, and run the setup command again. This deletes local records.

### Local authentication

On localhost, the supplied portable development profile provides a test login. Visit:

```text
http://localhost:5173/signin-with-chatgpt?return_to=/
```

The development identity is `Seedy` / `seedy@sites.test`. It is only a local development simulation, not real OAuth. The dashboard initially opens in Demo workspace mode. Select **My live data** to see your local database, or use **Add customer** to save a customer and switch to live data.

### Production authentication and hosting

The original deployment uses ChatGPT Sites authentication. `app/chatgpt-auth.ts` reads identity headers supplied by that trusted hosting gateway. The development login is excluded from production builds.

Uploading this repository to GitHub does not publish a working authenticated application. For another hosting provider, replace the authentication adapter with an actual server-verified identity/session provider, update sign-in/sign-out links, provision the database binding, and apply migrations. Do not trust caller-provided `oai-authenticated-*` headers on an unprotected public endpoint. GitHub Pages cannot run the backend.

The archive deliberately removes the original Site project ID, Git remote/history, credentials, runtime data and dependencies. The original live Site is not changed by editing this copy.



## Where to edit

| Path | Purpose |
| --- | --- |
| `app/dashboard.tsx` | Dashboard screens, customer forms, charts and plan UI |
| `app/globals.css` | Colors, layout, typography and responsive design |
| `app/page.tsx` | Protected entry page |
| `app/layout.tsx` | Page title and metadata |
| `app/api/workspace/route.ts` | Read/write backend endpoints |
| `app/chatgpt-auth.ts` | Hosting authentication adapter |
| `db/schema.ts` | Database tables |
| `db/index.ts` | Database connection |
| `drizzle/` | SQL migrations and migration metadata |
| `.openai/hosting.json` | Logical hosting storage bindings |
| `vite.config.ts`, `build/` | Framework and Worker build integration |

## Useful commands

```sh
npm run dev          # Development server with local test login
npm run typecheck    # TypeScript validation
npm run build        # Production Worker build
npm run db:generate  # Generate migrations after schema edits
```

After changing the schema, apply newly generated migrations in order; see `FRAMEWORK-NOTES.md` for the command. `npm start` previews the production Worker and does not include the simulated local login; use `npm run dev` for authenticated local development.

## Verification

The original application passed TypeScript checks and production compilation and was deployed successfully. This source export has been checked for archive integrity and includes the build helpers and migration files. A clean install on your computer and browser end-to-end testing have not been performed here.

Dependency licenses remain those of their respective authors. The build integration's supplied license is preserved in `build/sites-vite-plugin.LICENSE`.
