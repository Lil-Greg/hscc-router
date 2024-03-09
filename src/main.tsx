import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import LoginPage from './pages/LoginPage.tsx'

const router = createBrowserRouter([{
  path:"/", 
  element:<HomePage></HomePage>,
  errorElement:<div>404 Error</div>
},{
  path:"/login",
  element:<LoginPage></LoginPage>
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
