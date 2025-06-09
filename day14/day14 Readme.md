# React Watch Effect Demo — day14

This project demonstrates the use of React hooks like `useRef`, `useEffect`, and a custom `useWatch` hook in a sleek, dark-themed form interface.

## 🔧 Features Implemented

### ✅ useRef
- Stores persistent values across renders.
- Tracks the initial name input without causing re-renders.
- Enables direct DOM manipulation (e.g., focusing an input field).

### ✅ useEffect
- Implements a custom "watch" effect that logs changes in a specific state (input value).
- Triggers actions automatically when tracked values change.

### ✅ Custom useWatch Hook
- Custom hook that tracks and returns the most recent change to a state variable.
- Offers a clean way to monitor specific value updates for rendering or side effects.

---

## 📁 Components Overview

### 📌 `NameForm.jsx`
- Input field to enter the user’s name.
- Uses `useRef` to persist the initial name after submission.

### 📌 `WatchEffect.jsx`
- Input field where any change in value is logged using `useEffect`.

### 📌 `WatchInput.jsx`
- Uses a custom `useWatch` hook to track the latest value change.
- Displays the "watched value" on the UI.

### 📌 `FocusInput.jsx`
- Demonstrates how to programmatically focus an input field using `useRef`.

---

## 🎨 UI/UX Enhancements

- Sleek dark mode interface.
- Clean font and layout.
- Smooth hover transitions for buttons.
- Focus effects on inputs.

---

## 🚀 How to Run

```bash
# Clone and setup
npm create vite@latest day14 --template react
cd day14
npm install

# Add the component files to src/
# Replace App.css and App.jsx with the ones from this project

# Run the project
npm run dev
