import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import myRoutes from './routes/Routes.jsx'
import AuthProvider from './provider/AuthProvider'
import CartProvider from './provider/CartProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={myRoutes}></RouterProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
)
