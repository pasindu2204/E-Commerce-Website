
# Beauty_App — Frontend (React + Vite)

A clean, responsive React frontend for a beauty / apparel storefront built with Vite and TailwindCSS. This repository contains the client-side app, sample product data, and the core layout/components to get a shopping UI running quickly.

---

## Description

Beauty_App is a lightweight React + Vite frontend showcasing a product catalog, hero/banner, navigation, and cart flow. It uses a local product dataset and a simple context provider for app-wide values (currency, delivery fees, products).

Key files and components:
- [`src/main.jsx`](src/main.jsx) — app entry and provider wiring  
- [`src/App.jsx`](src/App.jsx) — route definitions and layout  
- [`src/Context/ShopContext.jsx`](src/Context/ShopContext.jsx) — `ShopContext` provider for products and shop settings  
- [`src/assets/assets.js`](src/assets/assets.js) — shared `assets` object and `products` dataset  
- [`src/Components/Navbar.jsx`](src/Components/Navbar.jsx) — main navigation  
- [`src/Components/Hero.jsx`](src/Components/Hero.jsx) — homepage hero/banner  
- [`src/Components/LatestCollection.jsx`](src/Components/LatestCollection.jsx) — collection list (reads `products` via context)  
- [`index.html`](index.html), [`vite.config.js`](vite.config.js), [`package.json`](package.json)

---

## Setup instructions

1. Clone the repo and open the project folder.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open http://localhost:5173 (or the Vite URL shown in terminal).

Files referenced during setup:
- Entry point: [`src/main.jsx`](src/main.jsx)  
- Project config: [`vite.config.js`](vite.config.js)  
- Package manifest: [`package.json`](package.json)

---

## Usage

- Routes are defined in [`src/App.jsx`](src/App.jsx). Launch and navigate:
  - `/` — Home (hero + latest collection)
  - `/collection` — Collection page scaffold
  - `/product/:productId` — Product detail scaffold
  - `/cart`, `/login`, `/place-order`, `/order` — respective pages
- The UI reads product data from [`src/assets/assets.js`](src/assets/assets.js) (`products` array) via [`ShopContext`](src/Context/ShopContext.jsx).
- Add components to pages under `src/Pages/` and reuse shared assets from [`src/assets/assets.js`](src/assets/assets.js).

Quick dev tips:
- Use Tailwind classes in components (already configured in `index.css`).
- Inspect the sample data in [`src/assets/assets.js`](src/assets/assets.js) to prototype lists or detail pages.

---

## Contributor guidelines

Contributions are welcome. Keep changes small and scoped.

- Branch naming: feature/<short-desc> or fix/<short-desc>
- Commit message style: short imperative (e.g., "Add product card component")
- Run linting before PR:
  ```sh
  npm run lint
  ```
- Architecture notes:
  - Global shop state lives in [`ShopContext`](src/Context/ShopContext.jsx).
  - Reusable UI lives under `src/Components/`. See [`Navbar`](src/Components/Navbar.jsx) and [`Hero`](src/Components/Hero.jsx) for examples.
  - Page-level code belongs in `src/Pages/`.

Please open pull requests against main and include a short description and screenshots (if UI changes).

Referenced components for contributors:
- [`src/Components/LatestCollection.jsx`](src/Components/LatestCollection.jsx) — example usage of `ShopContext`
- [`src/Components/Navbar.jsx`](src/Components/Navbar.jsx) — navigation patterns and links

---

## License

This project is available under the MIT License.

See LICENSE file (if you add one) or include the following in your repo:

MIT License

Copyright (c) YEAR

Permission is hereby granted, free of charge, to any person obtaining a copy...
```
