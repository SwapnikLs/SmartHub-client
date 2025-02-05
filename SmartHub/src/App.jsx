import LandingPage from './Pages/LandingPage';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './Pages/Login';
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<LandingPage/>
    },
    {
      path:"Login",
      element:<Login/>
    }
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}
export default App;
