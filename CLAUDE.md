# @pyreon/docs

Documentation site for the Pyreon UI framework ecosystem.

## Stack

- **Framework**: Next.js 16 (App Router, static export to `out/`)
- **Docs engine**: Fumadocs (fumadocs-core, fumadocs-ui, fumadocs-mdx)
- **Styling**: Tailwind CSS v4 + fumadocs-ui preset
- **Linting**: Biome (extends `@vitus-labs/tools-lint/biome`)
- **TypeScript**: 6.x with strict mode
- **Package manager**: Bun
- **Deployment**: GitHub Pages via GitHub Actions

## Project structure

```
src/
  app/
    (home)/page.tsx        — Landing page (hero, features, package cards)
    docs/layout.tsx        — Docs sidebar layout (fumadocs DocsLayout)
    docs/[[...slug]]/page.tsx — Dynamic MDX page renderer
    layout.tsx             — Root layout (RootProvider, static search)
    global.css             — Tailwind imports + custom hero/card styles
  components/              — Custom MDX components (APICard, PackageBadge, PropTable, CompatMatrix, Since)
  lib/
    source.ts              — Fumadocs source loader
    layout.shared.tsx      — Nav/link config shared between layouts

content/docs/              — MDX documentation pages (one folder per package)
source.config.ts           — Fumadocs MDX config (remarkInstall plugin)
mdx-components.tsx         — MDX component registry
```

## Commands

```bash
bun run dev          # Start dev server
bun run build        # Static export to out/
bun run typecheck    # tsc --noEmit
bun run lint         # biome check .
bun run lint:fix     # biome check . --write
bun run format       # biome format . --write
bun run check        # typecheck + lint + build
```

## Content authoring

- Each package has a folder under `content/docs/<package>/` with `index.mdx` and optional `meta.json`
- MDX files use fumadocs frontmatter (`title`, `description`)
- Custom components available in MDX: `APICard`, `PackageBadge`, `PropTable`, `CompatMatrix`, `Since`
- Install blocks use `remarkInstall` plugin — write ```` ```package-install ````
- Navigation tree is driven by `meta.json` files (fumadocs convention)

## Custom MDX components

- **APICard** — API item card with type badge (fn, C, H, T, K, P, Cx) and optional signature
- **PackageBadge** — Package name/version badge with status indicator (stable/beta/alpha/deprecated)
- **PropTable** — Props documentation table with columns: Prop, Type, Default, Description
- **CompatMatrix** — Framework compatibility table with support levels (full/partial/none)
- **Since** — Version badge (e.g. "v1.2.0+")

## CI/CD

- `ci.yml` — PR checks: lint, typecheck, build, dependency-review, CodeQL
- `deploy.yml` — Push to main: runs CI, then deploys `out/` to GitHub Pages
- `dependency-update.yml` — Weekly Monday: `bun update`, typecheck, lint, build, auto-PR
- `codeql.yml` — Weekly Wednesday: standalone security scan
- Dependabot groups: fumadocs, react, tailwind, types, GitHub Actions

## Conventions

- Static export (`output: 'export'`) — no server runtime
- All GitHub Actions pinned by SHA with version comment
- Biome extends `@vitus-labs/tools-lint/biome` (shared across Pyreon repos)
- No tests (static docs site) — quality gates are typecheck + lint + build
