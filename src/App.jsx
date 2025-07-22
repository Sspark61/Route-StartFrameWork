import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';
import Layout from './Layout/Layout';

function App() {

  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout/>,
      children: [
          {
            path: "",
            element: <Home />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "portfolio",
            element: <Portfolio />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
        ]
      }
  ]);

  return <RouterProvider router={router} />;
}

export default App