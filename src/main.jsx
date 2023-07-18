import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import Root from './Layout/Root'
import NotFound from './Components/Shared/NotFound'
import Home from './Components/Home/Home'
import Login from './Components/Authentication/Login'
import Register from './Components/Authentication/Register'
import AuthProvider from './context/AuthProvider'


const routes = createBrowserRouter([{
  path: '/',
  element: <Root />,
  errorElement: <NotFound />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <Home />
    },
    {
      path: '/policy',
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </React.StrictMode>,
)
