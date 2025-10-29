# Shubham Beladiya — Portfolio

This repository contains a simple, responsive personal portfolio website.

Files added/updated:


How to run locally

1. Open `index.html` in a browser (double-click or use a local file server).

Notes about folder-based URLs

I've added folder-based pages so the site can be served with "clean" URLs (no .html extension):

- `about/` → about/index.html
- `projects/` → projects/index.html
- `contact/` → contact/index.html
- `resume/` → resume/index.html

When hosted on GitHub Pages, Vercel, Netlify, or most static hosts, visiting `/about/` will automatically serve `/about/index.html` so the `.html` extension is hidden.

To add a downloadable resume PDF, place your `resume.pdf` at `assets/resume.pdf` and the Resume page will link to it.

Optional: serve with a lightweight server for better behavior (recommended for development):

On Windows PowerShell, from project folder run:

```powershell
python -m http.server 8000
```

Then visit http://localhost:8000 in your browser.

Next steps

- Replace placeholder project images and descriptions in `projects.html`.
- Add a hosted resume `resume.pdf` and update the resume link.
- Hook the contact form to a backend or Formspree for production submissions.
