// Login.jsx
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        toast.success(`Welcome ${result.user.displayName}`);
        navigate("/");
      })
      .catch((error) => {
        console.error("Login error:", error);
        toast.error("Login failed.");
      });
  };

  return (
    <div className="flex justify-center shadow items-center h-screen bg-gray-100">
        <button
        onClick={handleLogin}
        className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg shadow-md hover:shadow-lg border border-gray-300 transition duration-300"
        >
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
            alt="Google Logo"
            className="w-5 h-5"
        />
        <span className="text-sm font-medium">Sign in with Google</span>
        </button>
    </div>
  );
};

export default Login;

