// import React from "react";

// const Register = () => {
//     return(
//         <>

//             <div className="p-13">
//                 <div className="container mx-auto mt-20 p-10">
//             <h1 className="text-4xl font-semibold text-pink-500  text-center mb-10">Event Registration Form</h1>
//             <form id="registrationForm">
//                 <div className="mb-6">
//                 <label className="block text-lg font-bold mb-2" htmlFor="name">Full Name :</label>
//                 <input className="w-full p-2 border border-gray-400 rounded" type="text" id="name" name="name" required />
//                 </div>
//                 <div className="mb-6">
//                 <label className="block text-lg font-bold mb-2" htmlFor="email">Email :</label>
//                 <input className="w-full p-2 border border-gray-400 rounded" type="email" id="email" name="email" required />
//                 </div>
//                 <div className="mb-6">
//                 <label className="block text-lg font-bold mb-2" htmlFor="number">Phone no :</label>
//                 <input className="w-full p-2 border border-gray-400 rounded" type="number" id="number" name="number" required />
//                 </div>
//                <div className="mb-6">
//                 <label className="block text-lg font-bold mb-2" htmlFor="name">Enter event :</label>
//                 <input className="w-full p-2 border border-gray-400 rounded" type="text" id="name" name="name" required />
//                 </div>
//                <div className="mb-6">
//                 <label className="block text-lg font-bold mb-2" htmlFor="name">Enter venue:</label>
//                 <input className="w-full p-2 border border-gray-400 rounded" type="text" id="name" name="name" required />
//                 </div>
//                 <div className="mb-6">
//                 <label className="block text-lg font-bold mb-2" htmlFor="photographer">Choose Photographer :</label>
//                 <select className="w-full p-2 border border-gray-400 rounded" id="photographer" name="photographer" required>
//                     <option value="">Select a photographer</option>
//                     <option value="photographer1">Rohan Patel</option>
//                     <option value="photographer2">Meera Shah</option>
//                     <option value="photographer3">Ankit Joshi</option>
//                 </select>
//                 </div>
//                 <div className="mb-6">
//                 <label className="block text-lg font-bold mb-2" htmlFor="caterer">Choose Caterer :</label>
//                 <select className="w-full p-2 border border-gray-400 rounded" id="caterer" name="caterer" required>
//                     <option value="">Select a caterer</option>
//                     <option value="caterer1">Shunh Caterers</option>
//                     <option value="caterer2">Punjabi-point Caterers</option>
//                 </select>
//                 </div>
//                 <div className="mb-6">
//                 <label className="block text-lg font-bold mb-2" htmlFor="floatingTextarea2">Comments</label>
//                 <textarea className="w-full p-2 border border-gray-400 rounded" placeholder="Decoration Themes in your mind and your special demands" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
//                 </div>
//                 <button type="submit" className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button>
//                 <div id="message" className="mt-3"></div>
//             </form>
//         </div>
//             </div>

        
//         </>
//     )
// }
// export default Register



import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    event: "",
    venue: "",
    photographer: "",
    caterer: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log("Submitting this data:", formData); 
    const ref = await addDoc(collection(db, "registrations"), formData);
      toast.success("✅ Your response is submitted!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        event: "",
        venue: "",
        photographer: "",
        caterer: "",
        comments: "",
      });
    } catch (error) {
      console.error("Firebase error:", error);
      toast.error("❌ Something went wrong!");
    }
  };

  return (
    <div className="p-13">
         <ToastContainer position="top-center" autoClose={3000} />
      <div className="container mx-auto mt-20 p-10">
        <h1 className="text-4xl font-semibold text-pink-500  text-center mb-10">Event Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-lg font-bold mb-2" htmlFor="fullName">Full Name :</label>
            <input className="w-full p-2 border border-gray-400 rounded" type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-bold mb-2" htmlFor="email">Email :</label>
            <input className="w-full p-2 border border-gray-400 rounded" type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-bold mb-2" htmlFor="phone">Phone no :</label>
            <input className="w-full p-2 border border-gray-400 rounded" type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-bold mb-2" htmlFor="event">Enter event :</label>
            <input className="w-full p-2 border border-gray-400 rounded" type="text" id="event" name="event" value={formData.event} onChange={handleChange} required />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-bold mb-2" htmlFor="venue">Enter venue:</label>
            <input className="w-full p-2 border border-gray-400 rounded" type="text" id="venue" name="venue" value={formData.venue} onChange={handleChange} required />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-bold mb-2" htmlFor="photographer">Choose Photographer :</label>
            <select className="w-full p-2 border border-gray-400 rounded" id="photographer" name="photographer" value={formData.photographer} onChange={handleChange} required>
              <option value="">Select a photographer</option>
              <option value="Rohan Patel">Rohan Patel</option>
              <option value="Meera Shah">Meera Shah</option>
              <option value="Ankit Joshi">Ankit Joshi</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-lg font-bold mb-2" htmlFor="caterer">Choose Caterer :</label>
            <select className="w-full p-2 border border-gray-400 rounded" id="caterer" name="caterer" value={formData.caterer} onChange={handleChange} required>
              <option value="">Select a caterer</option>
              <option value="Shunh Caterers">Shubh Caterers</option>
              <option value="Punjabi-point Caterers">Punjabi-point Caterers</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-lg font-bold mb-2" htmlFor="comments">Comments</label>
            <textarea className="w-full p-2 border border-gray-400 rounded" name="comments" value={formData.comments} onChange={handleChange} placeholder="Decoration Themes in your mind and your special demands" id="comments" style={{ height: '100px' }}></textarea>
          </div>
         <button type="submit" className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
