import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './authContext'; // Make sure to import your AuthContext

const PrivateRoutes = () => {
  const { state } = useAuth();

  return state.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
