# Royal Park

Hotel landing page built with **React 19 + TypeScript + Vite + SCSS Modules**, organised with
[Feature-Sliced Design](https://feature-sliced.design/).

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

| Script              | Purpose                                 |
| ------------------- | --------------------------------------- |
| `npm run dev`       | Dev server with HMR                     |
| `npm run build`     | Type-check and build to `dist/`         |
| `npm run preview`   | Serve the production build locally      |
| `npm run typecheck` | TypeScript only                         |
| `npm run lint`      | ESLint (`lint:fix` to auto-fix)         |
| `npm run format`    | Prettier (`format:check` in CI)         |
| `npm test`          | Vitest + Testing Library (`test:watch`) |

Copy `.env.example` to `.env.local` and set `VITE_SUBSCRIBE_URL` to send newsletter sign-ups to a
real endpoint. Without it, the form validates and confirms locally.

## Architecture

```
src/
├── app/                 # Entry composition, global styles (tokens, reset, base)
├── pages/
│   └── home/            # HomePage — composes widgets in order
├── widgets/             # Self-contained page sections
│   ├── header/          #   nav + accessible mobile menu (model/useMobileMenu)
│   ├── hero/
│   ├── about/
│   ├── why-choose-us/
│   ├── rooms-gallery/
│   ├── testimonials/
│   ├── newsletter/
│   └── footer/
├── features/            # User interactions with business value
│   ├── search-rooms/    #   dates + guests form, validation
│   └── subscribe-newsletter/  # email form, validation, API call
├── entities/            # Business objects: types, data, presentational cards
│   ├── room/
│   ├── testimonial/
│   └── amenity/
└── shared/              # Reusable, business-agnostic code
    ├── ui/              #   Button, Container, Logo, SectionHeading
    ├── lib/             #   cn, date helpers
    ├── config/          #   site content, section ids, env, test setup
    ├── styles/          #   SCSS breakpoints & mixins (no CSS output)
    └── assets/images/   #   images grouped by section
```

### Rules

- **Layers import only downwards:** `app → pages → widgets → features → entities → shared`.
- **Public API only:** import a slice through its `index.ts` (`@/widgets/header`, `@/shared/ui`),
  never its internals. ESLint enforces this.
- **Segments inside a slice:** `ui/` (components + `*.module.scss`), `model/` (types, data, hooks,
  validation), `api/` (network), `lib/` (helpers).
- **Content lives in data, not markup:** rooms, testimonials, amenities, navigation, footer links
  and socials are typed arrays — add an item there, not in JSX.
- **Styling:** design tokens are CSS custom properties in `app/styles/_tokens.scss`; responsive
  rules use `@include down(md)` from `@/shared/styles`. No magic pixel offsets.
- **Tests sit next to the code** they cover (`*.test.ts(x)`).
