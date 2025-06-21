// import React from "react";
// // import "./EventCard.css"
// import { Link } from "react-router-dom";



// const EventCard = ({id, heading, date, location, img}) => {
//     const { year, month } = date;

    

//      return (
//         <>

//         <div className=" ">
//             <div className="max-w-md w-full mx-auto my-6 p-4 border border-pink-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//             <Link to={`/events/${id}`}>
//                 <div className="space-y-4 ">
//                 {/* Text content */}
//                 <div>
//                     <h3 className="text-2xl  font-bold text-gray-800 font-bold">{heading}</h3>
//                     <p className="text-sm text-gray-500 mt-1">
//                     <span className="block text-xl antialiased font-bold">Year: {year}</span>
//                     <span className="block text-xl font-bold">Month: {month}</span>
//                     </p>
//                     <p className="text-sm text-gray-500 mt-1">{location}</p>
//                 </div>

//                 {/* Image */}
//                 <div className="w-full h-48 md:h-64 overflow-hidden rounded-lg">
//                     <img
//                     src={img}
//                     alt="event"
//                     className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//                     />
//                 </div>
//                 </div>
//             </Link>
//             </div>
//         </div>

        
  
//         </>

     
//   );
// }
// export default EventCard



import React from "react";
import { Link } from "react-router-dom";


const EventCard = ({ id, heading, date, location, img }) => {
  const { year, month } = date;

  return (
    <div className="w-full max-w-sm p-4 border border-pink-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link to={`/events/${id}`}>
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">{heading}</h3>
            <p className="text-sm text-gray-500 mt-1">
              <span className="block text-xl font-bold">Year: {year}</span>
              <span className="block text-xl font-bold">Month: {month}</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">{location}</p>
          </div>
          <div className="w-full h-48 md:h-64 overflow-hidden rounded-lg">
            <img
              src={img}
              alt="event"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
