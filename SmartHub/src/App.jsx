import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ResourceLibrary from './Pages/ResourceLibrary';
import CommunityExchange from './Pages/CommunityExchange';
import Genres from './Pages/Genres';
import ProfilePage from "./Pages/ProfilePage";
import { UserProvider, useUserContext } from './Context/UserContext';
import Header from './Components/ExplorePageComponents/Header/Header';
import SmartPicks from './Pages/SmartPicks';
import RequestABook from './Pages/RequestABook';
import AdminPanel from './Pages/AdminPanel';
import Support from './Pages/Support';

// ✅ Private Route to protect authenticated pages
const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useUserContext();
  return isAuthenticated ? element : <Navigate to="/LogIn" />;
};

// 📌 Wrapper for Explore to handle nested routing
const ExploreLayout = () => (
  <div>
    <Header />
    <Outlet /> {/* 🚀 Child routes will be rendered here */}
  </div>
);

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/LogIn", element: <Login /> },
  { path: "/Register", element: <Register /> },

  // ✅ Protecting Explore Section
  {
    path: "/explore",
    element: <PrivateRoute element={<ExploreLayout />} />,
    children: [
      { index: true, element: <PrivateRoute element={<ResourceLibrary />} /> },
      { path: "community", element: <PrivateRoute element={<CommunityExchange />} /> },
      { path: "genres", element: <PrivateRoute element={<Genres />} /> },
      { path: "smart-picks", element: <PrivateRoute element={<SmartPicks />} /> },
      { path: "request-book", element: <PrivateRoute element={<RequestABook />} /> },
      { path: "admin-panel", element: <PrivateRoute element={<AdminPanel />} /> },
      { path: "support", element: <PrivateRoute element={<Support />} /> },
    ],
  },

  // ✅ Protecting Profile Page
  { path: "/profilepage", element: <PrivateRoute element={<ProfilePage />} /> },
]);

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
