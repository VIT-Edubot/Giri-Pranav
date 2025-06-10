# TanStack Query + Router Demo

This is a simple React application demonstrating the integration of **TanStack Router** and **TanStack Query** for page navigation and API data fetching. The UI is styled using **Tailwind CSS** for a modern and responsive look.

---

## 🚀 Features

- 🔄 Fetch posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- ⚡ Powered by [TanStack Query](https://tanstack.com/query) for fetching, caching, and synchronizing data
- 🧭 Navigation with [TanStack Router](https://tanstack.com/router)
- 💅 Styled with Tailwind CSS for modern UI
- 🔁 Manual refetch button
- ⚠️ Error handling

---

## 📁 Project Structure

```
src/
├── components/
│   └── Navbar.jsx            # Reusable navigation bar
├── hooks/
│   └── useFetchData.js       # Data fetching logic using axios
├── App.jsx                   # Home page with welcome message
├── DataPage.jsx              # Page to display fetched posts
├── main.jsx                  # Entry point with router + query providers
├── index.css                 # Tailwind CSS styles
```

---

## 📦 Installation

1. **Create Vite setup**:
    npm create vite@latest [Your folder name] --template react  
    cd [Your folder name]
2. **Install dependencies**:
   > *Skip this step if you've already installed them.*
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. Open in browser:
   ```
   http://localhost:5173/
   ```

---

## 🔧 Technologies Used

- React
- TanStack Query
- TanStack Router
- Axios
- Tailwind CSS
- Vite

---

## 📖 How TanStack Query Works Here

- A custom hook `useFetchData` uses **axios** to fetch data from the API.
- The `useQuery` hook handles the fetching, caching, and updating of data in `DataPage.jsx`.
- TanStack Query automatically:
  - Caches the response
  - Reuses cached data across components
  - Syncs and refetches when needed
- The `refetch()` method allows manual re-fetching of posts.
- The `isLoading` and `isError` flags are used to manage UI states.

---

## 🧪 Example API

Data is fetched from:

```
https://jsonplaceholder.typicode.com/posts
```

