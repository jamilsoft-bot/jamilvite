# jamilvite

Jamilvite scaffolds a Vite + React app with React Router, Tailwind CSS, and W3.CSS preconfigured.

## Install

```bash
npm install -g jamilvite
```

## Usage

```bash
jamilvite create my-app
```

Or via npx:

```bash
npx jamilvite@latest create my-app
```

You'll be prompted for:

- Project name (if not provided)
- TypeScript (Yes/No)
- W3.CSS inclusion mode (cdn or local)

## What it generates

```text
my-app/
  index.html
  package.json
  vite.config.js
  postcss.config.js
  tailwind.config.js
  src/
    main.jsx
    App.jsx
    routes/
      Router.jsx
    pages/
      Home.jsx
      About.jsx
      NotFound.jsx
    components/
      Nav.jsx
    styles/
      index.css
      w3.css
```

TypeScript templates use `.tsx` and include `tsconfig.json`.

## Getting started

```bash
cd my-app
npm install
npm run dev
```

## License

MIT
