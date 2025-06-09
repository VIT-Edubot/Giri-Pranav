# React Theme Dashboard

## useContext - Theme Toggle
We created a `ThemeContext` using `useContext` and `useState` to globally manage light/dark themes. The theme state is toggled using a button in the `UserList` component.

## useMemo - Filter Optimization
To improve performance, `useMemo` is used to memoize the filtered user list. This ensures the list is only recomputed when the `searchTerm` changes, avoiding unnecessary recalculations.

## useCallback - Event Handler Optimization
We used `useCallback` to memoize the `handleClick` function passed to each user item. This prevents child components from re-rendering unless necessary.

## File Overview
- `src/App.jsx`: Wraps the app in the `ThemeProvider`.
- `src/ThemeContext.js`: Manages the global theme state.
- `src/UserList.jsx`: Implements theme toggle, filtering, and memoized event handling.
- `src/styles.css`: Contains styles for light and dark themes.
