import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ResourceLibrary from './Pages/ResourceLibrary';
import CommunityExchange from './Pages/CommunityExchange';
import Genres from './Pages/Genres';
import ProfilePage from "./Pages/ProfilePage";
import { UserProvider } from './Context/UserContext';
import Header from './Components/ExplorePageComponents/Header/Header';
import SmartPicks from './Pages/SmartPicks';
import RequestABook from './Pages/RequestABook';
import AdminPanel from './Pages/AdminPanel';
import Support from './Pages/Support';
import BookDetails from './Pages/BookDetails';
import Dashboard from './Pages/Dashboard';

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

  // ✅ Explore Section with Nested Routes
  {
    path: "/explore",
    element: <ExploreLayout />, 
    children: [
      { index: true, element: <ResourceLibrary /> },
      { path: "community", element: <CommunityExchange /> },
      { path: "genres", element: <Genres /> },
      { path: "smart-picks", element: <SmartPicks /> },
      { path: "request-book", element: <RequestABook /> },
      { path: "admin-panel", element: <AdminPanel /> },
      { path: "support", element: <Support /> },
    ],
  },
  { path: "bookdetails", element: <BookDetails /> }, // ✅ Corrected Path
  {
    path:"/dashboard",
    element:<Dashboard/>
  },

  // ✅ Profile Page as a Public Route
  { path: "/profilepage", element: <ProfilePage /> },
]);

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
