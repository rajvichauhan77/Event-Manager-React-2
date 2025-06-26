import React, { useCallback, useState } from "react";
import { eventList } from "../utils/EventDatabase";
import SearchEventList from "../components/SearchEventList";
import FilterBox from "../components/FilterBox";
import EventCalendar from "../components/EventCalander";


const FilterEvent = () => {

    const [monthYear, setMonthYear] = useState({
        selectedMonth: null,
        selectedYear: null
    })

    const getMonthYear = useCallback(( selectedMonth,selectedYear) => {
            // console.log(selectedMonth, selectedYear)
             console.log("inside month year")

            setMonthYear({selectedMonth, selectedYear})
    }, [])


    const preBookedEvents = eventList.filter(event => event.date);

    return(
        <>  
          
            <div className="border p-3">
                <FilterBox getMonthYear={getMonthYear}/>
                <SearchEventList monthYear={monthYear}/>

                 <EventCalendar events={preBookedEvents} />
            </div>
            
        </>
    )
}
export default FilterEvent