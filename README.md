# Genealogy App

A local-first, privacy-respecting genealogical tree builder built with React, Redux Toolkit, and IndexedDB.

## Features

- Add people and relationships with undo/redo
- Data persisted to IndexedDB via Dexie
- Export tree to JSON and CSV
- Internationalization via i18next (English included)
- Accessible SVG-based canvas for navigating the tree
- Unit tests with Vitest and end-to-end tests with Playwright

## Development

```bash
npm install
npm run dev
```

## Testing

```bash
npm test      # run unit tests
npx playwright test  # run e2e tests
```

## Build

```bash
npm run build
```
