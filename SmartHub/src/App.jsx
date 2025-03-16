import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ResourceLibrary from './Pages/ResourceLibrary';
import CommunityExchange from './Pages/CommunityExchange';
import Genres from './Pages/Genres';
import ProfilePage from "./Pages/ProfilePage";
import Header from './Components/ExplorePageComponents/Header/Header';
import SmartPicks from './Pages/SmartPicks';
import RequestABook from './Pages/RequestABook';
import AdminPanel from './Pages/AdminPanel';
import Support from './Pages/Support';
import BookDetails from './Pages/BookDetails';
import Dashboard from './Pages/Dashboard';
import PdfViewer from './Components/GlobalComponents/PDFViewer/PDFViewer';
import Providers from './Context/Providers';
import { useUserContext } from './Context/UserContext';
const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useUserContext(); // Get auth status
  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

// ✅ Wrapper to Ensure Header is Present in All `/explore` Routes
const ExplorePage = ({ element }) => (
  <>
    <Header />
    {element}
  </>
);

// ✅ Router Setup
const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },

  // ✅ Private Explore Routes (Only logged-in users can access)
  { path: "/explore", element: <PrivateRoute element={<ExplorePage element={<ResourceLibrary />} />} /> },
  { path: "/explore/genres", element: <PrivateRoute element={<ExplorePage element={<Genres />} />} /> },
  { path: "/explore/smart-picks", element: <PrivateRoute element={<ExplorePage element={<SmartPicks />} />} /> },
  { path: "/explore/community", element: <PrivateRoute element={<ExplorePage element={<CommunityExchange />} />} /> },
  { path: "/explore/request-book", element: <PrivateRoute element={<ExplorePage element={<RequestABook />} />} /> },
  { path: "/explore/admin-panel", element: <PrivateRoute element={<ExplorePage element={<AdminPanel />} />} /> },
  { path: "/explore/support", element: <PrivateRoute element={<ExplorePage element={<Support />} />} /> },

  // ✅ Other Private Pages
  { path: "/bookdetails", element: <PrivateRoute element={<BookDetails />} /> },
  { path: "/dashboard", element: <PrivateRoute element={<Dashboard />} /> },
  { path: "/profilepage", element: <PrivateRoute element={<ProfilePage />} /> },
  { path: "/pdfview", element: <PrivateRoute element={<PdfViewer />} /> },

  // ✅ 404 Page
  { path: "*", element: <h1>404 - Page Not Found</h1> },
]);

function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
}

export default App;
