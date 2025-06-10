# Day 17 - React Router DOM Navigation Assignment

## 📘 Overview

This project demonstrates the use of **React Router DOM** to build a multi-page feature management dashboard with dynamic routing in React. The interface is styled with a modern dark theme and responsive layout.

## 🔧 Features

- 🏠 Home Page with navigation links
- ℹ️ About Page with description
- 📊 Dashboard Page that displays dynamic content based on URL parameters
- 🌙 Dark mode UI with vibrant accent colors
- ⚡ Smooth navigation using `Link`
- 📍 URL parameter support using `useParams`

## 📁 Folder Structure

```
day17/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Dashboard.jsx
│   ├── index.css
├── index.html
├── package.json
└── README.md
```

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Then open your browser to:

```
http://localhost:5173/
```

## 🧭 Navigation Example

- `/` - Home
- `/about` - About Page
- `/dashboard/101` - Dashboard for feature ID 101
- `/dashboard/202` - Dashboard for feature ID 202

## 💅 Styling

- Dark background (`#1e1e2f`) for comfort and focus
- Neon blue (`#00d9ff`) accents for links and headings
- Centered content with larger, modern fonts
- Smooth hover animations for buttons and links

## 🧠 Key React Router Concepts

- **`<BrowserRouter>`**: Wraps the app to enable routing
- **`<Routes>` & `<Route>`**: Define page paths and components
- **`<Link>`**: Enables client-side navigation
- **`useParams()`**: Fetches dynamic values from the URL (e.g., feature ID)

---

Made with ❤️ using React + React Router DOM
