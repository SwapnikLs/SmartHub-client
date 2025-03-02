import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Explore from './Pages/explore';
import CommunityExchange from './Pages/CommunityExchange';
import Genres from './Pages/Genres';
import ProfilePage from "./Pages/ProfilePage";
import { UserProvider, useUserContext } from './Context/UserContext'; // Import UserProvider and useUserContext

// Create a PrivateRoute component to protect routes
const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useUserContext(); // Check if user is authenticated

  if (!isAuthenticated) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/LogIn" />;
  }

  return element; // If authenticated, render the element (component)
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/LogIn",
      element: <Login />,
    },
    {
      path: "/Register",
      element: <Register />,
    },
    {
      path: "/Explore",
      element: <PrivateRoute element={<Explore />} />, // Protect the Explore page with PrivateRoute
    },
    {
      path: "/community",
      element: <PrivateRoute element={<CommunityExchange />} />, // Protect the CommunityExchange page
    },
    {
      path: "/Genres",
      element: <PrivateRoute element={<Genres />} />, // Protect the Genres page
    },
    {
      path: "/ProfilePage",
      element: <PrivateRoute element={<ProfilePage />} />, // Protect the ProfilePage
    },
  ]);

  return (
    <UserProvider> {/* Wrapping the entire app */}
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
