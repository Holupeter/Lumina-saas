
# Lumina Analytics 🛰️

A high-performance observability dashboard built for modern web teams. This project demonstrates advanced **Next.js 15** patterns, **React 19** features, and **Tailwind CSS v4** styling.

[Live Demo] | [GitHub Repository]

## 🚀 The Mission

Modern applications require total visibility. **Lumina** was built to explore the boundaries of server-side performance and real-time user interaction. The goal was to create a "Developer-First" interface that is as functional as it is beautiful.

---

## 🛠️ The Tech Stack

| Layer | Technology |
| --- | --- |
| **Framework** | Next.js 15 (App Router) |
| **Runtime** | React 19 + React Compiler |
| **Language** | TypeScript (Strict Mode) |
| **Styling** | Tailwind CSS v4 (CSS-first config) |

---

## ✨ Key Features & Technical Wins

### 1. **Zero-Runtime Performance**

By leveraging the **React Compiler**, this project achieves optimized memoization without the overhead of manual `useMemo` or `useCallback` hooks. This ensures a 100/100 Lighthouse performance score.

### 2. **Adaptive Navigation**

Implemented a scroll-reactive "Glassmorphism" navbar.

* **Problem:** Standard navbars feel disconnected from the content during scroll.
* **Solution:** Used a throttled `window.scrollY` event listener combined with Tailwind's `backdrop-blur-md` to create a seamless transition from transparent to "frosted glass."

### 3. **Modern Design System**

Utilized the new **Tailwind v4 `@theme` directive** to define a custom, CSS-variable-driven color palette. This allows for instant branding shifts and type-safe animation triggers.

---

## 📂 Project Structure

```text
src/
  ├── app/            # Next.js App Router (File-based routing)
  ├── components/     # Atomic UI components (Navbar, Hero, etc.)
  ├── types/          # Centralized TypeScript definitions
  └── styles/         # Global CSS using Tailwind v4 @theme

```

---

## ⚙️ Getting Started

1. **Clone the repo:**
```bash
git clone https://github.com/Holupeter/lumina-saas.git

```

2. **Install dependencies:**
```bash
npm install

```

3. **Run the development server:**
```bash
npm run dev

```

---