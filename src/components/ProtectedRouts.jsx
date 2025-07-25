
import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

import { signOut } from "firebase/auth";


const ProtectedRoute = ({ children }) => {
  const user = auth.currentUser;

  return user ? children : <Navigate to="/login" />;
};


const handleLogout = () => {
  signOut(auth);
};

export default ProtectedRoute;
