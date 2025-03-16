import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
import { Providers } from './Context/Providers';

// ✅ Wrapper to Ensure Header is Present in All `/explore` Routes
const ExplorePage = ({ element }) => (
  <>
    <Header />
    {element}
  </>
);

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },

  // ✅ Explore Routes (Each Has Header)
  { path: "/explore", element: <ExplorePage element={<ResourceLibrary />} /> },
  { path: "/explore/genres", element: <ExplorePage element={<Genres />} /> },
  { path: "/explore/smart-picks", element: <ExplorePage element={<SmartPicks />} /> },
  { path: "/explore/community", element: <ExplorePage element={<CommunityExchange />} /> },
  { path: "/explore/request-book", element: <ExplorePage element={<RequestABook />} /> },
  { path: "/explore/admin-panel", element: <ExplorePage element={<AdminPanel />} /> },
  { path: "/explore/support", element: <ExplorePage element={<Support />} /> },

  // ✅ Other Pages (No Header Modification)
  { path: "/bookdetails", element: <BookDetails /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/profilepage", element: <ProfilePage /> },
  { path: "/pdfview", element: <PdfViewer /> },

  // ✅ 404 Page (Optional)
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
