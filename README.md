# E-Commerce-Website

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
