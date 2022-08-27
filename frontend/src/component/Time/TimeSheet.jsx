import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { gettime } from '../../Redux/TimeClient/action';
import { useDispatch, useSelector } from 'react-redux';

function FullCalendarApp() {
 
  const {timedata}  = useSelector(
    (state) => state.TimeClientReducer
  );
console.log(timedata);
  const dispatch = useDispatch();
  
      useEffect(() => {
        dispatch(gettime())
      }, []);

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          center: 'dayGridMonth,timeGridWeek,timeGridDay new',
        }}
        customButtons={{
          new: {
            text: 'new',
            click: () => console.log('new event'),
          },
        }}
        events={timedata}
        eventColor="green"
        nowIndicator
        dateClick={(e) => console.log(e.dateStr)}
        eventClick={(e) => console.log(e.event.id)}
      />
    </div>
  );
}

export default FullCalendarApp;