import React from "react";

const Register = () => {
    return(
        <>

            <div className="p-13">
                <div className="container mx-auto mt-20 p-10">
            <h1 className="text-4xl font-semibold text-pink-500  text-center mb-10">Event Registration Form</h1>
            <form id="registrationForm">
                <div className="mb-6">
                <label className="block text-lg font-bold mb-2" htmlFor="name">Full Name :</label>
                <input className="w-full p-2 border border-gray-400 rounded" type="text" id="name" name="name" required />
                </div>
                <div className="mb-6">
                <label className="block text-lg font-bold mb-2" htmlFor="email">Email :</label>
                <input className="w-full p-2 border border-gray-400 rounded" type="email" id="email" name="email" required />
                </div>
                <div className="mb-6">
                <label className="block text-lg font-bold mb-2" htmlFor="number">Phone no :</label>
                <input className="w-full p-2 border border-gray-400 rounded" type="number" id="number" name="number" required />
                </div>
                <div className="mb-6">
                <label className="block text-lg font-bold mb-2" htmlFor="event">Choose Event :</label>
                <select className="w-full p-2 border border-gray-400 rounded" id="event" name="event" required>
                    <option value="">Select an event</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="concert">Concert</option>
                </select>
                </div>
                <div className="mb-6">
                <label className="block text-lg font-bold mb-2" htmlFor="venue">Choose Venue :</label>
                <select className="w-full p-2 border border-gray-400 rounded" id="venue" name="venue" required>
                    <option value="">Select a venue</option>
                    <option value="venue1">Rangoli</option>
                    <option value="venue2">Iscon</option>
                    <option value="venue3">Queen palace</option>
                </select>
                </div>
                <div className="mb-6">
                <label className="block text-lg font-bold mb-2" htmlFor="photographer">Choose Photographer :</label>
                <select className="w-full p-2 border border-gray-400 rounded" id="photographer" name="photographer" required>
                    <option value="">Select a photographer</option>
                    <option value="photographer1">Photographer 1</option>
                    <option value="photographer2">Photographer 2</option>
                    <option value="photographer3">Photographer 3</option>
                </select>
                </div>
                <div className="mb-6">
                <label className="block text-lg font-bold mb-2" htmlFor="caterer">Choose Caterer :</label>
                <select className="w-full p-2 border border-gray-400 rounded" id="caterer" name="caterer" required>
                    <option value="">Select a caterer</option>
                    <option value="caterer1">Punjabi-point Caterer </option>
                    <option value="caterer2">Food-point Caterer</option>
                    <option value="caterer3">Mango</option>
                </select>
                </div>
                <div className="mb-6">
                <label className="block text-lg font-bold mb-2" htmlFor="floatingTextarea2">Comments</label>
                <textarea className="w-full p-2 border border-gray-400 rounded" placeholder="Your special demands" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
                </div>
                <button type="submit" className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button>
                <div id="message" className="mt-3"></div>
            </form>
        </div>
            </div>

        
        </>
    )
}
export default Register