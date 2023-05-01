import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/layout/Main';
import Login from './components/Login/Login';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import AuthProvider from './providers/AuthProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </AuthProvider>
)
