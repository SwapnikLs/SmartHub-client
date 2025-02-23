
import LandingPage from './Pages/LandingPage';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './Pages/Login';
import Register from './Pages/Register';
import Explore from './Pages/explore';
import CommunityExchange from './Pages/CommunityExchange';
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><LandingPage/></>
    },
    {
      path:"/LogIn",
      element:<Login/>
    },
    {
      path:"/Register",
      element:<Register/>
    },
    {
      path:"/Explore",
      element:<Explore/>
    },
    {
      path:"/community",
      element:<CommunityExchange/>
    }
    
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}
export default App;
