import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const EventCalendar = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const formattedEvents = events
    .filter((event) => event.dateStr)
    .map((event) => ({
      ...event,
      title: event.heading || event.title,
      start: new Date(event.dateStr),
      end: new Date(event.dateStr),
      allDay: true,
    }));

  return (
    <div className="mt-4 p-2 border">
      <h3 className="mb-3 font-bold text-xl">Event Calendar</h3>
      <Calendar
        localizer={localizer}
        events={formattedEvents}
        startAccessor="start"
        // endAccessor="end"
        style={{ height: 400 }}
        onSelectEvent={(event) => setSelectedEvent(event)}
      />

      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-[90%] max-w-md">
            <h2 className="text-xl font-bold mb-2">{selectedEvent.heading}</h2>
            <p className="mb-2"><strong>Date:</strong> {selectedEvent.dateStr}</p>
            <p className="mb-4">{selectedEvent.description}</p>
            <button
              onClick={() => setSelectedEvent(null)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCalendar;
