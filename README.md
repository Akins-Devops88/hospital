# Acacia Hospital Management System

A hospital management web app for Acacia Hospital: staff management across all departments,
patient records, lab results with website delivery to patients, medication inventory, an admin
dashboard, a doctor dashboard, and HMO provider/claims tracking.

Built with React + Vite + Tailwind CSS + Recharts + lucide-react. Data is stored in the browser's
`localStorage` (no backend/database yet — see **Limitations** below).

## Run it locally

Requires [Node.js](https://nodejs.org/) 18 or newer.

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

This outputs a static site into `dist/`. Preview it locally with:

```bash
npm run preview
```

## Deploying

This is a static site after build — it can be hosted anywhere that serves static files.

### Option A: Vercel or Netlify (recommended, zero config)
1. Push this repo to GitHub.
2. Import the repo on [vercel.com](https://vercel.com/new) or [netlify.com](https://app.netlify.com/start).
3. Build command: `npm run build` &nbsp; Output directory: `dist`.
4. Deploy — you'll get a live URL automatically on every push.

### Option B: GitHub Pages (via GitHub Actions, included)
This repo includes `.github/workflows/deploy.yml`, which builds and deploys to GitHub Pages
automatically on every push to `main`.

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages** and set **Source** to "GitHub Actions".
3. Push to `main` (or re-run the workflow from the **Actions** tab). The site will be published at
   `https://<your-username>.github.io/<repo-name>/`.
4. **Important:** if your repo name isn't served from the domain root, open `vite.config.js` and
   uncomment/set the `base` option to `"/<repo-name>/"`, matching your actual repo name, then
   commit. (Not needed for Vercel/Netlify.)

### Option C: any static host
Run `npm run build` and upload the contents of `dist/` anywhere that serves static files
(S3 + CloudFront, Cloudflare Pages, your own server, etc.).

## Project structure

```
├── src/
│   ├── App.jsx        # the entire application (dashboards, patients, staff, lab, pharmacy, HMO)
│   ├── main.jsx        # React entry point
│   └── index.css       # Tailwind directives
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── .github/workflows/deploy.yml   # auto-deploy to GitHub Pages
```

## Switching roles

Use the "Role" dropdown in the top-right of the app to switch between the **Administrator**
view (staff, departments, pharmacy, HMO) and the **Doctor** view (scoped to that doctor's own
patients and appointments). A link in the sidebar ("Open Patient Portal") lets you look up a
patient by ID or name to see any lab results that have been sent to them.

## Limitations — read before using this for real patient data

This is a frontend demo application, not a production clinical system:

- **No backend or database.** All data lives in the browser's `localStorage`. Clearing browser
  data, using a different browser/device, or incognito mode will lose or hide the data. Nothing
  is shared between users — this is not multi-user in any real sense yet.
- **No authentication.** The role switcher is a UI convenience, not a login system. Anyone who
  opens the site has full access to every role.
- **No real lab/HMO integrations.** "Send lab result via website" and HMO claim statuses are
  simulated in the app's own data model, not connected to any real laboratory system, HMO API, or
  notification/SMS/email service.
- **Not HIPAA/NDPR compliant as-is.** Do not enter real patient data into this deployment. Treat
  it as a UI/workflow prototype to validate with stakeholders before investing in a real backend
  (database, authentication, audit logging, and encryption at rest/in transit).

The natural next step is a real backend (e.g. Postgres + an API layer) with proper authentication
and role-based access control — ask if you'd like help scoping that.
