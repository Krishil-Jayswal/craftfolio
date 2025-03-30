import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'
import { setId } from './Redux/Data/idSlice'
import { setName } from './Redux/Data/nameSlice'
import { setEmail } from './Redux/Data/emailSlice'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Auth from './Components/Auth'
import { ProtectedRoute, AuthRoute } from './Components/ProtectedRoute'
import Dashboard from './Components/Dashboard'
import Profile from './Components/Profile'
import TemplateDetail from './Components/TemplateDetail'

function App() {
  // Get user ID from Redux store to check authentication status
  const userId = useSelector((state) => state.id);
  const dispatch = useDispatch();

  const BASE = import.meta.env.VITE_BACKEND_HOST;
  // Auto-login on app load
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get(`${BASE}/api/v1/auth/me`, { 
          withCredentials: true 
        });
        
        if (response.data && response.data.user) {
          // Set user data in Redux store
          dispatch(setId(response.data.user.id));
          dispatch(setName(response.data.user.name));
          dispatch(setEmail(response.data.user.email));
        }
      } catch (error) {
        // User is not authenticated, or there was an error
        console.error('Auto-login error:', error);
        // No need to show error to user as this is expected behavior for non-logged in users
      }
    };
    
    // Only check auth status if user is not already logged in
    if (!userId) {
      checkAuthStatus();
    }
  }, [dispatch, userId, BASE]);
  
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
    },
    {
      path: "/template/:id",
      element: <TemplateDetail />,
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
