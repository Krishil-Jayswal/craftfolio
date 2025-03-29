import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Auth from './Components/Auth'
import { ProtectedRoute, AuthRoute } from './Components/ProtectedRoute'
import Dashboard from './Components/Dashboard'
import Profile from './Components/Profile'

function App() {
  // Get user ID from Redux store to check authentication status
  const userId = useSelector((state) => state.id);
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/auth",
      element: <AuthRoute><Auth /></AuthRoute>
    },
    {
      path: "/dashboard",
      element: <ProtectedRoute><Dashboard /></ProtectedRoute>
    },
    {
      path: "/profile",
      element: <ProtectedRoute><Profile /></ProtectedRoute>
    }
  ]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  )
}

export default App
