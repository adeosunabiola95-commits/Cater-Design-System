# Cater Design System

Design system and Storybook documentation for **WeCater** / **Cater** products — tokens, React components, and examples aligned with the [Figma library](https://www.figma.com/design/tK5SjqGRgeVr5w5tmxuLDa/Cater-Design-System).

## Live documentation

**Storybook (GitHub Pages):**  
https://adeosunabiola95-commits.github.io/Cater-Design-System/

Start at the [Introduction](https://adeosunabiola95-commits.github.io/Cater-Design-System/?path=/docs/introduction--docs) page for foundation tokens and component navigation.

## Local development

```bash
npm ci
npm run storybook
```

Opens Storybook at http://localhost:6006 (Introduction page by default).

Other scripts:

| Command | Description |
|---------|-------------|
| `npm run build-storybook` | Static build → `storybook-static/` |
| `npm test` | Unit tests (Vitest) |
| `npm run icons:generate` | Regenerate Remix Icon wrappers |

## Repository structure

| Path | Purpose |
|------|---------|
| `src/components/` | React components (Button, Modal, InputField, …) |
| `src/tokens/` | Color, typography, spacing, shadows |
| `src/icons/` | Icon library (Remix Icon wrappers) |
| `src/examples/` | Composed flows (e.g. WeCater Explore, Customize Order modal) |
| `src/Introduction.mdx` | Storybook home page |
| `CHANGELOG.md` | Release notes (source of truth) |
| `.storybook/` | Storybook config and docs chrome |

## Changelog & releases

Day-to-day: add bullets under **`## Unreleased`** in [`CHANGELOG.md`](./CHANGELOG.md).

When you ship a version:

### Option A — GitHub Actions (recommended)

1. Merge your work to `main`.
2. Go to **Actions** → **Release changelog** → **Run workflow**.
3. Enter a semver (e.g. `1.1.0`).
4. The workflow will:
   - Move **Unreleased** items into `## [1.1.0] - YYYY-MM-DD`
   - Reset **Unreleased** with a placeholder line
   - Sync [`src/Changelog.mdx`](./src/Changelog.mdx) for Storybook
   - Bump `package.json` version
   - Commit, push, and tag `v1.1.0`
5. **Deploy Storybook to GitHub Pages** runs on push and updates the live site.

### Option B — Local

```bash
# 1. Edit CHANGELOG.md under ## Unreleased first
npm run changelog:release -- 1.1.0
npm run changelog:sync
git add CHANGELOG.md src/Changelog.mdx package.json
git commit -m "chore(release): v1.1.0"
git tag v1.1.0
git push && git push --tags
```

## GitHub Pages setup

The site deploys from **GitHub Actions** (workflow: `deploy-github-pages.yml`).

One-time: **Settings → Pages → Source: GitHub Actions** (repo must be **public** on the free plan).

## Figma

[Cater Design System on Figma](https://www.figma.com/design/tK5SjqGRgeVr5w5tmxuLDa/Cater-Design-System)

## License

ISC
