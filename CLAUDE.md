# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (accessible on 0.0.0.0)
npm run build    # Production build
npm run lint     # ESLint with Next.js config
npm run prettier # Format all files with Prettier
```

No test suite is configured.

## Stack

- **Next.js 12** with pages-based routing (not app directory)
- **Chakra UI v1** for components and theming
- **Framer Motion v5** for animations
- **Emotion** for CSS-in-JS

## Architecture

### Routing

Pages-based routing under `pages/`:
- `index.js` — Home: bio, CV, social links
- `works.js` — Portfolio grid overview
- `works/[name].js` — Individual project detail pages (one file per project)
- `404.js` — Custom error page

### Component Patterns

**Layouts** (`components/layouts/`):
- `main.js` — wraps every page; includes `<Head>`, navbar, and `<AnimatePresence>` for page transitions
- `article.js` — inner wrapper used on work detail pages; adds Framer Motion slide-in

**Animated sections** — `components/section.js` wraps content blocks with Framer Motion fade-in; accepts a `delay` prop for staggering.

**Grid items** — `components/grid-item.js` exports `GridItem` (used on home page) and `WorkGridItem` (used on the works page) which are Chakra `Box` components with hover effects.

**Work detail components** — `components/work.js` exports `Title`, `Meta`, and `WorkImage` used consistently across all `pages/works/*.js` files.

### Theme

Defined in `lib/theme.js` — extends Chakra's default theme with:
- Default color mode: `dark`
- Custom `grassTeal` color (`#88ccca`) used as the accent/link color in dark mode
- Custom `fonts` config (`M PLUS Rounded 1c` as heading font)

Color mode script is injected in `pages/_document.js` to prevent flash on load.

### Styling Conventions

Prettier is configured with: single quotes, no semicolons, 2-space indent, LF line endings, no trailing commas. Run `npm run prettier` before committing.

Chakra UI props are used for all layout and spacing — avoid inline styles. Use `useColorModeValue` for theme-aware colors.
