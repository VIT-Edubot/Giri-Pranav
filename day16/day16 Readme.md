# 🚀 Feature Management UI – ShadCN Modal Integration

This project is a basic feature management interface demonstrating the use of **ShadCN UI** components — specifically modal and button — in a React + Vite + TypeScript + Tailwind CSS stack.

## 📁 Tech Stack

- React (with TypeScript)
- Vite
- Tailwind CSS
- ShadCN UI (Dialog, Button)
- Radix UI (via ShadCN)
- Lucide Icons

---

## ✅ Setup Instructions

### 1. Create the React + Vite + TypeScript Project

```bash
npm create vite@latest react-shadcn-demo --template react-ts
cd react-shadcn-demo
npm install
```

### 2. Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add the Tailwind directives to `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. Initialize ShadCN UI

```bash
npm install -D shadcn
npx shadcn@latest init
```

During the CLI prompts:

- **Project type**: Vite
- **Language**: TypeScript
- **Source Directory**: `src`
- **Import Alias**: `@`

> Add this to `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

- **Tailwind Config**: Automatically detected
- **Theme**: Choose default or customize
- **Dark Mode**: `class`

### 4. Add ShadCN UI Components

```bash
npx shadcn@latest add dialog button
```

This generates:

- `src/components/ui/dialog.tsx`
- `src/components/ui/button.tsx`
- Required Lucide icons and utility functions

### 5. Create Modal Integration

Create a `FeatureModal.tsx` component using `Dialog` and `Button`. You can manage modal open/close state using React's `useState`.

Then integrate this component inside `App.tsx`.

### 6. Run the App

```bash
npm run dev
```

---

## 📚 Learning Outcomes

✅ Integrate [ShadCN UI](https://ui.shadcn.com) components in a React TypeScript project  
✅ Manage modal visibility state with `useState`  
✅ Use Tailwind CSS for utility-first styling  
✅ Implement event handling (Confirm, Cancel, Escape key, outside click)  
✅ Customize UI via Tailwind (`bg-gray-800`, `rounded-lg`, etc.)

---

