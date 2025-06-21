// import React from "react";
// import { eventList } from "../utils/EventDatabase";
// import EventCard from "../components/EventCard";
// import Navbar from "../components/Navbar";


// // import "./EventList.css"



// const EventList = () => {

//     const renderEventCard = () => {
//       return eventList.map(({id, date, heading, location, img}) => {
//             return(
//                  <EventCard
//                     key={id}
//                     id={id}
//                     date={date}
//                     heading={heading}
//                     location={location}
//                     img={img}
//                  />
//             )
//         })
//     }


//     return(
//         <>

//             <div className="border p-5">
//                 <div className="border p-5">
//                     {eventList.length>0 ? (renderEventCard()
//                      ) : <p>No events available</p>} 
//                 </div>
//             </div>

           
          
//         </>
//     )
// }
// export default EventList


import React from "react";
import { eventList } from "../utils/EventDatabase";
import EventCard from "../components/EventCard";
import Images from '../Images/em-logo.jpeg';

const EventList = () => {
  return (

    <>
        <div className=" p-3 mt-5">
        <div className="py-10 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
     <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 bg-white border-4 border-gray-200 rounded-xl shadow-md p-6">
      
      {/* Left Column - Text Content */}
      <div className="p-4 bg-white">
        <h1 className="text-4xl italic font-semibold text-pink-600 mb-4">Event Manager</h1>
        <p className="mt-6 text-lg font-semibold text-gray-700">
          Event Manager is an event agency in Bhavnagar, Tennessee focusing on weddings, social gatherings, and corporate events.
          We are passionate about creating unforgettable experiences. As soon as you see the website, you have a clear idea of what to do next.
        </p>
      </div>

      
            <div className="p-4 bg-white flex justify-center items-center">
                    
          <img
            src={Images}
            alt="Event Manager Logo"
            className="h-64 w-auto object-contain rounded-md shadow-md"
          />

            </div>
            </div>
        </div>
        </div>

     </div>
        



    <div className="container  mx-auto p-15">
        <div className="text-2xl font-bold text-pink-600 mb-5">Our Events: </div>       

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {eventList.map(({ id, date, heading, location, img }) => (
          <EventCard
            key={id}
            id={id}
            date={date}
            heading={heading}
            location={location}
            img={img}
          />
        ))}
      </div>
    </div>

      <div className="container mx-auto text-center mt-2 mb-3">
        <h1 className="text-3xl font-bold font-semibold text-pink-500 ">The Event Manager</h1>
        <p className="text-lg">Your one-stop solution for managing events.</p>
       
</div>

        <div className="mt-5">
                    
            <div className="bg-black text-white p-10">
     <div className="flex flex-wrap justify-center md:justify-between">
    <div className="w-full md:w-1/4 mb-5 md:mb-0">
      <h3 className="text-lg font-semibold text-pink-500 mb-2">About Us</h3>
      <p className="text-sm">If you're looking for a partner to help you create memorable events, look no further. Contact us today to learn more about our services!</p>
    </div>
    <div className="w-full md:w-1/4 mb-10 md:mb-0">
      <h3 className="text-lg font-semibold text-pink-500 mb-2">Contact Us</h3>
      <p className="text-sm">Email: rajvi77@gmail.com</p>
      <p className="text-sm">Phone: +91 9727916009</p>
      <div className="flex justify-start mt-2">
        <a href="https://facebook.com" target="_blank" className="mr-4 text-white hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
        <a href="https://twitter.com" target="_blank" className="mr-4 text-white hover:text-gray-400"><i className="fab fa-twitter"></i></a>
        <a href="https://instagram.com" target="_blank" className="text-white hover:text-gray-400"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
    <div className="w-full md:w-1/4 mb-10 md:mb-0">
      <h3 className="text-lg font-semibold text-pink-500 mb-2">Visit Us</h3>
      <div className=" ">
        <iframe className="w-full  border-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.019984282839!2d-122.0842496846923!3d37.42206597982571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24c2f2b9e3b%3A0x2b0b7e1b2b0b7e1b!2sGoogleplex!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus" allowFullScreen></iframe>
      </div>
    </div>
 
  </div>
  <div className="text-center mt-10">
    <p>&copy; <span id="year"></span> EM RD. All rights reserved.</p>
  </div>
</div>

        </div>

    </>



  );
};

export default EventList;
