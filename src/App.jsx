import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
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