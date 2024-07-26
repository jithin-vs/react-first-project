import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
 
import Layout from './components/Layout.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <Layout><Home /></Layout>
}, {
  path: '/cart',
  element: <Layout><Cart /></Layout>
  }])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
