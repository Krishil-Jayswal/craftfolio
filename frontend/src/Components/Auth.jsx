import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setEmail } from '../Redux/Data/emailSlice';
import { setName } from '../Redux/Data/nameSlice';
import { setId } from '../Redux/Data/idSlice';
import Navbar from './Navbar';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


const Auth = () => {

  var BASE_URL = import.meta.env.VITE_BACKEND_HOST;

  const dispatch = useDispatch();
  const storedName = useSelector((state) => state.name);
  const storedEmail = useSelector((state) => state.email);

  const [isLogin, setIsLogin] = useState(true);
  const [email, setLocalEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setLocalName] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [passwordReq, setPasswordReq] = useState({
    length: false,
    uppercase: false,
    number: false,
    special: false
  });

  // Initialize local state with Redux store values
  useEffect(() => {
    if (storedName) {
      setLocalName(storedName);
    }
    if (storedEmail) {
      setLocalEmail(storedEmail);
    }
  }, [storedName, storedEmail]);

  const navigate = useNavigate();

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  const calculatePasswordStrength = (pass) => {
    let strength = 0;
    const req = {
      length: pass.length >= 8,
      uppercase: /[A-Z]/.test(pass),
      number: /[0-9]/.test(pass),
      special: /[^A-Za-z0-9]/.test(pass)
    };
    
    if (req.length) strength += 1;
    if (req.uppercase) strength += 1;
    if (req.number) strength += 1;
    if (req.special) strength += 1;
    
    setPasswordReq(req);
    setPasswordStrength(strength);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    calculatePasswordStrength(newPassword);
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setLocalName(newName);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setLocalEmail(newEmail);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
      if (isLogin) {
        try {
          const response = await axios.post(
            `${BASE_URL}/api/v1/auth/login`,
            { email, password },
            {
              withCredentials: true,
            }
          );
          toast.success(response.data.message);
          console.log(response.data)
          // const id = response.data.user.id; // extract the id from the response
          dispatch(setId(response.data.user.id));
          dispatch(setEmail(response.data.user.email));
          dispatch(setName(response.data.user.name));
          navigate("/"); // Redirect to home page upon successful login
        } catch (error) {
          toast.error(error.response?.data?.message || "Something went wrong.");
        } finally {
          setLoading(false); // Stop loader
        }
      } else {
        try {
          const response = await axios.post(
            `${BASE_URL}/api/v1/auth/register`,
            { name, email, password }
          );
          toast.success(response.data.message);
          console.log(response.data);
        
        dispatch(setId(response.data.user.id));
        dispatch(setEmail(response.data.user.email));
        dispatch(setName(response.data.user.name));
      }
      catch (error) {
        toast.error(error.response?.data?.message || "Something went wrong.");
        console.log(error);
      } finally {
        setLoading(false); // Stop loader
      }
      }
      setLoading(false);
  };

  // const handleSocialAuth = (provider) => {
  //   console.log(`Authenticating with ${provider}`);
  //   // Implement social auth logic
  // };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      <div className="flex items-center justify-center min-h-screen pt-20 pb-20">
        <div className="w-full max-w-md p-8 mx-auto">
          {/* Card with glass morphism */}
          <div className="relative backdrop-blur-lg bg-gray-800/50 rounded-2xl shadow-xl border border-gray-700 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-600 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-600 rounded-full opacity-20 blur-2xl"></div>
            
            <div className="relative p-8 z-10">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  {isLogin ? 'Welcome Back' : 'Create Account'}
                </h2>
                <p className="mt-2 text-gray-400">
                  {isLogin 
                    ? 'Sign in to access your portfolio dashboard' 
                    : 'Join thousands of creators and showcase your work'}
                </p>
              </div>
              
              {/* Social Login Buttons */}
              {/* <div className="flex flex-col space-y-3 mb-6">
                <button 
                  onClick={() => handleSocialAuth('Google')}
                  className="flex items-center justify-center gap-3 w-full py-2.5 border border-gray-600 rounded-lg hover:bg-gray-700/50 transition duration-300"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Continue with Google
                </button>
                <button 
                  onClick={() => handleSocialAuth('GitHub')}
                  className="flex items-center justify-center gap-3 w-full py-2.5 border border-gray-600 rounded-lg hover:bg-gray-700/50 transition duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
                  </svg>
                  Continue with GitHub
                </button>
              </div> */}
              
              {/* Divider */}
              {/* <div className="flex items-center mb-6">
                <div className="flex-1 h-px bg-gray-700"></div>
                <p className="mx-4 text-sm text-gray-400">or continue with email</p>
                <div className="flex-1 h-px bg-gray-700"></div>
              </div> */}
              
              {/* Form */}
              <form onSubmit={handleSubmit}>
                {/* Error message */}
                {error && (
                  <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-200 text-sm">
                    {error}
                  </div>
                )}
                
                {/* Name Field (Signup only) */}
                {!isLogin && (
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={handleNameChange}
                      className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                )}
                
                {/* Email Field */}
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                
                {/* Password Field */}
                <div className="mb-4">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-1">Password</label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="••••••••••"
                    required
                  />
                  
                  {/* Password RequiSignup only) */}
                  {!isLogin && password.length > 0 && (
                    <div className="mt-2 text-xs space-y-1 text-gray-400">
                      <p className={passwordReq.length ? "text-green-500" : "text-gray-400"}>
                        • At least 8 characters long
                      </p>
                      <p className={passwordReq.uppercase ? "text-green-500" : "text-gray-400"}>
                        • At least one uppercase letter
                      </p>
                      <p className={passwordReq.number ? "text-green-500" : "text-gray-400"}>
                        • At least one number
                      </p>
                      <p className={passwordReq.special ? "text-green-500" : "text-gray-400"}>
                        • At least one special character
                      </p>
                    </div>
                  )}
                </div>
                
                {/* Login-specific features */}
                {isLogin && (
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-600 rounded bg-gray-700"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                        Remember me
                      </label>
                    </div>
                    <div className="text-sm">
                      <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                )}
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                    loading 
                      ? 'bg-purple-700/50 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-purple-500/25'
                  }`}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    isLogin ? 'Sign In' : 'Create Account'
                  )}
                </button>
              </form>
              
              {/* Toggle Auth Mode */}
              <div className="mt-6 text-center text-sm">
                <p className="text-gray-400">
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                  <button 
                    onClick={toggleAuthMode}
                    className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
                  >
                    {isLogin ? 'Sign up' : 'Sign in'}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth; 