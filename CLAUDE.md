# @pyreon/docs

Documentation site for the Pyreon UI framework ecosystem.

## Stack

- **Framework**: VitePress 1.x (static site generator)
- **Components**: Vue 3 (custom components in `.vitepress/theme/components/`)
- **Linting**: Biome
- **Package manager**: Bun
- **Deployment**: GitHub Pages via GitHub Actions

## Project structure

```
index.md                      — Homepage (VitePress hero layout)
docs/                         — All documentation pages (flat .md files)
.vitepress/
  config.ts                   — VitePress config (sidebar, nav, theme)
  theme/
    index.ts                  — Theme extension (registers global components)
    custom.css                — Brand colors and overrides
    components/               — Custom Vue components for docs
      PackageBadge.vue        — Package status badge (stable/beta/alpha)
      PropTable.vue           — Props documentation table
      APICard.vue             — API item card with type badge
      CompatMatrix.vue        — Framework compatibility table
      Since.vue               — Version badge
```

## Commands

```bash
bun run dev          # Start dev server
bun run build        # Build to .vitepress/dist/
bun run preview      # Preview built site
bun run lint         # biome check .
bun run lint:fix     # biome check . --write
bun run format       # biome format . --write
bun run check        # lint + build
```

## Content authoring

- Each package has a `.md` file in `docs/` (flat, no subfolders)
- Markdown files use YAML frontmatter (`title`, `description`)
- Custom components available globally: `PackageBadge`, `PropTable`, `APICard`, `CompatMatrix`, `Since`
- Install blocks use VitePress code groups (`::: code-group`)
- Sidebar navigation is defined in `.vitepress/config.ts`

## Custom components

- **PackageBadge** — Package name badge with status indicator (stable/beta/alpha/deprecated)
- **PropTable** — Props documentation table with columns: Prop, Type, Default, Description
- **APICard** — API item card with type badge (fn, C, H, T, K, P, Cx) and optional signature
- **CompatMatrix** — Framework compatibility table with support levels (full/partial/none)
- **Since** — Version badge (e.g. "v1.2.0+")

## CI/CD

- `ci.yml` — PR checks: lint, build, dependency-review, CodeQL
- `deploy.yml` — Push to main: runs CI, then deploys `.vitepress/dist/` to GitHub Pages
- `dependency-update.yml` — Weekly Monday: `bun update`, lint, build, auto-PR
- `codeql.yml` — Weekly Wednesday: standalone security scan

## Conventions

- Static site generation — no server runtime
- All GitHub Actions pinned by SHA with version comment
- Biome for linting (scoped to `.vitepress/` TypeScript and Vue files)
- No tests — quality gates are lint + build
