import React from 'react';
import ReactDOM from 'react-dom/client';
// Import the router functions
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import our Layout (App) and our new pages
import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';
import './index.css';

// Define our routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // <App> is the layout for all pages
    children: [
      {
        path: '/', // When the URL is exactly "/"
        element: <HomePage />, // Render the HomePage inside App's <Outlet />
      },
      {
        path: 'about-us', // When the URL is "/about-us"
        element: <AboutUsPage />, // Render the AboutUsPage inside App's <Outlet />
      },
    ],
  },
]);

// 4. Render the <RouterProvider /> instead of <App />
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);