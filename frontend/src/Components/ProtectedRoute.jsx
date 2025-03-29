import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// Component to protect routes that require authentication
const ProtectedRoute = ({ children }) => {
  const userId = useSelector((state) => state.id);
  
  // If user is not logged in (no userId), redirect to auth page
  if (!userId) {
    return <Navigate to="/auth" replace />;
  }
  
  // If user is logged in, render the child components
  return children;
};

// Component for routes that should only be accessible when NOT logged in
const AuthRoute = ({ children }) => {
  const userId = useSelector((state) => state.id);
  
  // If user is already logged in, redirect to home page
  if (userId) {
    return <Navigate to="/" replace />;
  }
  
  // If user is not logged in, render the auth component
  return children;
};

export { ProtectedRoute, AuthRoute }; 