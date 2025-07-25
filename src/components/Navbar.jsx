// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {

 

//     return(
//         <>
//         <div>
//             <nav className="bg-white border-gray-200 dark:bg-gray-900">
//             <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//                 <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
//                     {/* <img src="em-logo/images" className="h-8" alt="Flowbite Logo" /> */}
//                     <span className="self-center text-2xl font-bold text-pink-500 font-semibold whitespace-nowrap ">Event-Manager</span>
//                 </a>
//                 <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
//                     <span className="sr-only">Open main menu</span>
//                     <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">

//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        
//                     </svg>
//                 </button>
//                 <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//                 <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//                     <li>
//                     {/* <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a> */}

//                     <Link to={"/"} className="text-white">Home</Link>
//                     </li>

//                     <li>
//                     {/* <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a> */}

//                     <Link to={"find-events"} className="text-white">   Fiend Events</Link>
//                     </li>
//                     <li>
//                     {/* <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a> */}
//                     <Link to={"about-us"} className="text-white">About</Link>
//                     </li>

//                     <li>
//                     {/* <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a> */}
//                      <Link to={"contact-us"} className="text-white">Contact</Link>
//                     </li>
//                     <li>
//                     {/* <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Register</a> */}

//                     <Link to={"register"} className="text-white">Event-Register</Link>
//                     </li>
//                 </ul>
//                 </div>
//             </div>
//             </nav>  
//             </div>        
//         </>
//     )
// }

// export default Navbar



import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); 
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate("/login"); 
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-bold text-pink-500 whitespace-nowrap">Event-Manager</span>
          </Link>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li><Link to="/" className="text-white">Home</Link></li>
              <li><Link to="/find-events" className="text-white">Find Events</Link></li>
              <li><Link to="/about-us" className="text-white">About</Link></li>
              <li><Link to="/contact-us" className="text-white">Contact</Link></li>
              <li><Link to="/register" className="text-white">Event Register</Link></li>
              
              
              {!user ? (
                <li><Link to="/login" className="text-green-400 font-semibold">Login</Link></li>
              ) : (
                <li>
                  <button onClick={handleLogout} className="text-red-400 font-semibold">Logout</button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
