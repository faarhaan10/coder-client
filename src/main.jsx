import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' 
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import Root from './Layout/Root'
import NotFound from './Components/Shared/NotFound'
import Home from './Components/Home/Home'


const routes = createBrowserRouter([{
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
