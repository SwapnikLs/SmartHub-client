import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import AuthContainer from './Components/LearnWithUs';
import LandingPage from './Pages/LandingPage';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './Pages/Login';
import Register from './Pages/Register';
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<LandingPage/>
    },
    {
      path:"Login",
      element:<Login/>
    },
    {
      path:"Register",
      element:<Register/>
    }
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}
export default App;
