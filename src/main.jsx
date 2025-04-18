import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './index.css'

import Home from './routes/Home.jsx'
import NewPost from './routes/NewPost.jsx'

import { createBrowserRouter, Router, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    element: <App />,
    children:
      [{
        path: "/",
        element: <Home />
      },
      {
        path: "/new",
        element: <NewPost />
      }]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
