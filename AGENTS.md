## Project

**pixelseasons** is an Astro + [Starlight](https://starlight.astro.build/) documentation site. All content is written in Markdown/MDX and served as a static site.

Key files:
- `astro.config.mjs` — Starlight integration config (title, sidebar, social links)
- `src/content.config.ts` — content collection definition using Starlight's `docsLoader` and `docsSchema`
- `src/content/docs/` — all documentation pages (`.md` / `.mdx`); file path = URL route
- `src/assets/` — images referenced from Markdown with relative paths
- `public/` — static assets (fonts, favicon, logo) served at the root

## Development

When starting the dev server, use background mode:

```
npm run astro -- dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Other commands (run from project root):

| Command             | Action                                      |
| :------------------ | :------------------------------------------ |
| `npm run dev`       | Start dev server at `localhost:4321`        |
| `npm run build`     | Build production site to `./dist/`          |
| `npm run preview`   | Preview the production build locally        |
| `npm run astro ...` | Run Astro CLI commands (`astro check`, etc.)|

## Content & Routing

- New pages: add `.md` or `.mdx` files under `src/content/docs/`. The file path maps directly to the URL (e.g. `src/content/docs/guides/foo.md` → `/guides/foo/`).
- **Sidebar**: manually configured in `astro.config.mjs` under `starlight({ sidebar: [...] })`. Add new items there when creating new pages. Exception: the `reference/` directory uses `autogenerate` — files there appear automatically.
- Frontmatter follows Starlight's schema (`docsSchema`). At minimum include `title`.

## Documentation

Full documentation: https://docs.astro.build

Starlight documentation: https://starlight.astro.build/

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
