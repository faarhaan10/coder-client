import React from 'react'
import ReactDOM from 'react-dom/client' 
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Layouts/Root.jsx'
import NotFound from './Components/Shared/NotFound.jsx'
import Home from './Components/Home/Home.jsx'

const routes =createBrowserRouter([{
  path: '/',
  element: <Root />,
  errorElement: <NotFound />,
  children: [
    {
      path: '/',
      element: <Home />
    }
  ]
}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
