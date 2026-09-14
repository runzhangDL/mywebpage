# mywebpage

Personal homepage for Run Zhang.

Built with [Next.js](https://nextjs.org) (App Router), React 19, TypeScript and
Tailwind CSS v4.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run typecheck
```

## Layout

- `app/` — routes. `page.tsx` is the homepage; each project write-up lives in
  its own folder (`app/asv`, `app/gat`, `app/vrl`).
- `components/` — shared UI (`Footer`, `ProjectCard`, `ProjectPage`, `Figure`,
  `Video`).
- `lib/projects.ts` — the project list rendered on the homepage. Adding a
  project means adding an entry here plus an `app/<slug>/page.tsx`.
- `lib/social.ts` — footer links.
- `app/globals.css` — design tokens (colour, type) and long-form article styles.
