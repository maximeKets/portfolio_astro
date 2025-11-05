# macOS User-friendly Portfolio

A modern, interactive portfolio built with Astro, React, and Tailwind CSS, featuring a macOS-inspired interface and an AI terminal.

## 🚀 Features

- Modern Stack: Astro 5, React, Tailwind CSS
- macOS-style UI: Dock, toolbar, draggable windows, notes app, GitHub project viewer
- AI Terminal: Chat endpoint powered by Groq (GROQ_API_KEY)
- Modular configuration: Edit content via files in `src/config/` (no code changes required)
- Accessibility: Keyboard navigation and ARIA semantics across key components
- SEO: `@astrolib/seo`, sitemap, Twitter cards, JSON-LD, canonical from `PUBLIC_SITE_URL`
- Image performance: `astro:assets` for backgrounds, lazy/async loading for content images
- TypeScript first: Strong shared types in `src/types`
- Vercel-ready: Deploy easily with environment config

## 🛠️ Tech Stack

- [Astro](https://astro.build/) — Content-focused web framework
- [React](https://reactjs.org/) — UI interactivity
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- [TypeScript](https://www.typescriptlang.org/) — Types and DX
- [Vercel](https://vercel.com/) — Hosting/analytics

## 📦 Installation

1) Clone the repository

```bash
git clone https://github.com/aabdoo23/portfolio
cd portfolio
```

2) Install dependencies

```bash
npm install
```

3) Configure environment variables

Copy `.env.example` to `.env` and fill in:

```
GROQ_API_KEY=your_groq_api_key_here
# Optional but recommended for SEO/canonical URLs
# PUBLIC_SITE_URL=https://your-domain.tld
```

4) Add your content

Configuration is modular under `src/config/`:

- `personal.ts` — Name, role, website, brief focus
- `social.ts` — GitHub, LinkedIn links
- `contact.ts` — Email, phone, Calendly
- `education.ts`, `experience.ts`, `skills.ts` — Main profile content
- `extracurricular.ts`, `competitions.ts` — Optional extras
- `projects.ts` — Portfolio projects (structure, screenshots, repo links)
- `apps.ts` — Resume and Spotify playlist IDs/URLs
- `site.ts` — SEO (title/description/keywords) and theme colors

All types are defined in `src/types` and aggregated as `userConfig` in `src/config/index.ts`.

5) (Optional) Generate project JSON from GitHub

See `util/github_repo_parser.py`. To reduce rate limiting, pass a token in the script (personal access token):

```python
def main():
    parser = GitHubRepoParser('ghp_YOUR_TOKEN_HERE')
```

## 🚀 Development

To start the development server:

```bash
npm run dev
```

This will start the development server at `http://localhost:4321`.

## 🏗️ Building for Production

To build the project for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Deploy to vercel:
```bash
npx vercel deploy --prod
```
or 
```bash
npx vercel deploy
```
and select the image from the vercel dashboard.

There is a bug with direct deployment from github, i can't seem to figure it out tbf, so for the time being use the above commands after running ```npm run build```.

Tips:
- In Vercel Project Settings → Environment Variables, set `PUBLIC_SITE_URL` (e.g., `https://your-domain.tld`) so canonical/OG links are correct.
- Also set `GROQ_API_KEY` for the Terminal chat.

## 📁 Project Structure

```
├── src/
│   ├── components/      # React components
│   ├── layouts/         # Astro/React layouts
│   ├── pages/           # Astro pages (includes API routes)
│   ├── styles/          # Global styles
│   ├── config/          # Modular user/site config (see files listed above)
│   ├── types/           # Shared TypeScript types
│   └── assets/          # Images and static assets
├── public/             # Public assets
├── .astro/             # Astro build files
├── util/               # Utility functions
└── astro.config.mjs    # Astro configuration
```

## 🔧 Configuration & Architecture

- `astro.config.mjs`: Astro config; `site` can be set via `PUBLIC_SITE_URL`
- `src/components/global/BaseHead.astro`: Central SEO (AstroSeo) + JSON-LD and OG defaults
- `src/config/*`: All user content and site/theme config
- `src/types`: Shared types for config and components
- `src/pages/api/chat.ts`: Serverless API route using Groq (requires `GROQ_API_KEY`)

State management:
- `AppLayout.tsx` uses a reducer to manage app windows (`terminal`, `notes`, `github`, `resume`, `spotify`) instead of multiple booleans.

Accessibility:
- Menubar, dialog, tree, and toolbar semantics; keyboard activation for dock/menu; labelled controls; `aria-live` for terminal/messages.

SEO:
- `@astrolib/seo` provides meta, Twitter cards, openGraph with a safe fallback image; JSON-LD for WebSite and Person.

## 🚀 Deployment

The project is configured for deployment on Vercel.

1. Push to GitHub and connect the repo in Vercel
2. In Project Settings → Environment Variables set:
    - `PUBLIC_SITE_URL` = your production URL (e.g., https://your-domain.tld)
    - `GROQ_API_KEY` = your key
3. Vercel will deploy automatically. If auto-deploy fails, use the CLI commands above.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Inspired by macOS terminal interface
- Built with modern web technologies
- Thanks to all contributors and maintainers of the open-source tools used in this project

## 📞 Contact

For questions or support, please open an issue on GitHub.

Original version made with ❤️ in Austin, TX by Johnny Culbreth
Modified with ❤️ in Giza, Egypt by aabdoo23
