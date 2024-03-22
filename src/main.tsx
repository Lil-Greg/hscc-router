import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import LoginPage from './pages/LoginPage.tsx'
import AboutMe from './pages/AboutMe.tsx'
import MainPage from './pages/MainPage.tsx'
import Fruit from './components/Fruit.tsx'
import Vegetable from './components/Vegetable.tsx'
import Register from './pages/RegisterPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        path: "fruit",
        element: <Fruit />
      }, {
        path: "vegetables",
        element: <Vegetable></Vegetable>
      }, {
        path: "/",
        element: <HomePage></HomePage>,
        errorElement: <div>404 Error</div>
      }, {
        path: "/login",
        element: <LoginPage></LoginPage>
      }, {
        path: "/aboutme",
        element: <AboutMe></AboutMe>
      }, {
        path: "/register",
        element: <Register />
      }
    ]
  }])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
