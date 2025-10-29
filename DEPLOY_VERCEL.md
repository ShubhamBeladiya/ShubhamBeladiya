Deploying this project (Vercel) — quick checklist

Prerequisites
- Node.js 18+ installed locally (recommended)
- GitHub repository with your code pushed
- Vercel account (https://vercel.com)

Fast deploy steps (recommended - Vercel Hosting + Serverless Functions)
1. Push your repo to GitHub.
2. In Vercel dashboard, click "Import Project" → select your GitHub repo.
   - Build Command: `npm run build` (Vercel will auto-detect Vite)
   - Output Directory: `dist`
3. Add Environment Variables in Vercel (Project Settings > Environment Variables):
   - `EMAIL_USER` — email address that will send contact form messages (Gmail recommended with App Password)
   - `EMAIL_PASS` — app password or SMTP password
   - `EMAIL_TO` — your destination email (where messages are sent)
4. Deploy. Vercel will run the build and serve static assets; serverless functions live under `/api/` (your `api/send-email.js`).

Run locally with Vercel dev
- Install Vercel CLI (optional, but useful): `npm i -g vercel`
- Create a local `.env` file in the project root with these variables (do NOT commit this file):

```
EMAIL_USER=your@example.com
EMAIL_PASS=your_app_password
EMAIL_TO=your@email.com
VITE_REPO_NAME=    # optional: set to the repo path if you want to serve under a subpath (e.g., "picto")
```

- Start the dev server (PowerShell):

```powershell
# if using vercel dev (recommended to test serverless functions)
vercel dev

# or for front-end only (Vite)
npm run dev
```

Notes and troubleshooting
- If `vercel dev` shows your app under a repo base path (e.g., `/picto/`), open the exact Local URL it prints (e.g., `http://localhost:3000/picto/`).
- If you see `ERR_TOO_MANY_REDIRECTS`, clear your browser cookies for localhost or open an incognito window, and restart `vercel dev`.
- On Gmail: prefer App Passwords or OAuth. Plain account passwords may be blocked by Google.
- For static-only hosts (GitHub Pages, S3) the `api/send-email.js` serverless function will not run — move email sending to an external API (SendGrid, Formspree) or host serverless functions on Vercel/Netlify/AWS.

Advanced: Enforce Node version on deploy
- We've added an `engines.node` entry to `package.json` recommending Node 18+. Vercel generally picks a recent Node runtime; to force a specific Node version add an `engines.node` value or set the Node version in your host settings.

If you want, I can:
- Add a `.env.example` file (no secrets) to the repo.
- Configure a small CI step to run `npm ci && npm run build` on push.
