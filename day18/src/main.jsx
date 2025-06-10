// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createRouter,
  createRootRoute,
  createRoute,
} from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import App from './App';
import DataPage from './DataPage';
import { Outlet } from '@tanstack/react-router';
// 1. Define the root route
const rootRoute = createRootRoute({
  component: () => <div><Outlet /></div>,
});

// 2. Define child routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
});

const dataRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/data',
  component: DataPage,
});

// 3. Create route tree
const routeTree = rootRoute.addChildren([indexRoute, dataRoute]);

// 4. Create the router
const router = createRouter({
  routeTree,
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
