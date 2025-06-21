import React from "react";
import { useParams } from "react-router-dom";
import { eventList } from "../utils/EventDatabase";
import Navbar from "../components/Navbar";
import {MdCalendarMonth} from "react-icons/md";
import {IoLocationSharp} from "react-icons/io5"

const EventDetails = () => {

    const {id} = useParams()
    console.log(id)
    const numId = Number(id)


    const filteredEvent = eventList.find((EventDetails)=> {
        return EventDetails.id === numId
    })
    console.log(filteredEvent)


    return(
        <>
            
            {/* <Navbar/> */}

       <div className="max-w-3xl mt-5 mx-auto p-4 bg-white rounded-2xl shadow-lg border border-pink-500">
            <img
                src={filteredEvent.img}
                alt="Event"
                className="w-full h-64 object-cover rounded-xl mb-4"
            />

            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">
                Event Name: {filteredEvent.heading}
                </h3>

                <div className="flex items-center gap-4 text-gray-600">
                <MdCalendarMonth className="text-pink-500 text-xl" />
                <span>{filteredEvent.date.month}</span>
                <span>{filteredEvent.date.year}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                <IoLocationSharp className="text-pink-500 text-xl" />
                <span>{filteredEvent.location}</span>
                </div>

                <div className="text-gray-700">
                <p className="font-semibold text-pink-500">Event Description:</p>
                <p className="mt-1">{filteredEvent.description}</p>
                </div>
            </div>
            </div>



        </>
    )
}
export default EventDetails