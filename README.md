# w3b — a simple component library

- Bootstrapped with [`vite-plugin-react-pages`](https://github.com/vitejs/vite-plugin-react-pages)'s library starter

# Installation

- `pnpm i`

# Folder structure

- `tokens`
- `src`: where all components are exported
- `docs`: for developing and documentation
- .github/workflows: for building tokens from Figma

# Sync tokens with Figma (`tokens`)

- Push from Tokens Studio
- Github workflow will run automatically. Open a PR to merge into your branch

# Developing components

- `pnpm run dev`

Write components in its folder and export

# Write docs

> **Notice the "Components" navigation at the top bar!**

Edit `src/Button/index.tsx` or other source files, the demos will inflect your change instantly.
Edit `src/Button/demos/demo1.tsx` or other demo files, the demos will inflect your change instantly.

`npm run build-docs` The docs are built and served.

`npm run ssr-docs` The app are built into a static site (Static-Site Generation) and served.

`npm run build-lib` Build the library for publishing.

# Deploy docs

- Link the repo on Vercel for continuous intergration
- In build command, override with `vite build-doc` instead.

# Publishing

n/a
