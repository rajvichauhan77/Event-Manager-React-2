import React, { useState, useEffect } from "react";
// import { useState } from "react";


const FilterBox = ({getMonthYear}) => {

    const [selectedMonth, setSelectedMonth] = useState("January")

    const [selectedYear, setSelectedYear] = useState(2023)



    const month = [
        "January",
        "Fberuary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Augest",
        "September",
        "October",
        "November",
        "December",
        
    ]

    const year = [
        2023, 2024
    ]

    const monthToDisplay = () => {
        return month.map((month, index) => {
            return(
                <option key={index} value={month}>
                    {month}
                </option>
            )
        })
    }

      const yearsToDisplay = () => {
        return year.map((year, index) => {
            return(
                <option key={index} value={year}>
                    {year}
                </option>
            )
        })
    }

    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value)
        // console.log(e.target.value)
    }

     const handleYearChange = (e) => {
        setSelectedYear(Number(e.target.value))
        // console.log(e.target.value)
    }


    // const updateParent = () => {
    // getMonthYear(selectedMonth, selectedYear)

    // }


    // const submitEventInfo =(e) => {
    //     e.preventDefault()
    //     updateParent()
    // }


    useEffect(() => {

          const updateParent = () => {
            console.log("Inside useEefct")
            getMonthYear(selectedMonth, selectedYear)
           }

        updateParent()
    }, [selectedMonth, selectedYear, getMonthYear])

    return(
        <>
            <div className="border mb-5 p-3">
                <div className=" ">
                    
                    {/* <form onSubmit={updateParent}>
                        <label htmlFor="month">Month : </label>
                        <select className="inset-ring-2 inset-ring-pink-500/50 rounded-xl  p-3 " 
                        value={selectedMonth} 
                        onChange={handleMonthChange} > {monthToDisplay()} </select>
                        
                        <label htmlFor="year" className="ms-5">Year : </label>
                        <select className="inset-ring-2 inset-ring-pink-500/50 rounded-xl  p-3 "
                        value={selectedYear}
                        onChange={handleYearChange} > {yearsToDisplay()} </select>

                        <br /> <br />
                        <button type="submit" className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Find Events</button>

                    
                    
                    </form> */}

                    <div className="min-h-screen  flex items-center justify-center bg-gradient-to-br from-white to-pink-50 p-3">
                   
                    <form 
                        
                        className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md space-y-6 border border-pink-200"
                    >
                        <h2 className="text-2xl font-bold text-pink-600 text-center mb-4">Filter Events</h2>

                        <div className="flex gap-x-6">
                        {/* Month Dropdown */}
                        <div className="flex-1">
                            <label htmlFor="month" className="block text-sm font-medium text-gray-700 mb-1">
                            Month
                            </label>
                            <select
                            id="month"
                            className="w-full border border-pink-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                            value={selectedMonth}
                            onChange={handleMonthChange}
                            >
                            {monthToDisplay()}
                            </select>
                        </div>

                        {/* Year Dropdown */}
                        <div className="flex-1">
                            <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                            Year
                            </label>
                            <select
                            id="year"
                            className="w-full border border-pink-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                            value={selectedYear}
                            onChange={handleYearChange}
                            >
                            {yearsToDisplay()}
                            </select>
                        </div>
                        </div>

                        {/* <div className="flex justify-center">
                        <button
                            type="submit"
                            className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:from-pink-500 hover:to-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-semibold rounded-xl text-base px-6 py-3 transition">
                            Find Events
                        </button>
                        </div> */}
                    </form>
                </div>


                    

                </div>
            </div>
        </>
    )
}

export default FilterBox