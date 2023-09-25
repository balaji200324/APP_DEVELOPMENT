import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CSSTransition } from 'react-transition-group';

const localizer = momentLocalizer(moment);

const Schedule = () => {

  const initialEvents = [
    {
      title: 'Meeting with Client',
      start: new Date(2023, 8, 25, 10, 0),
      end: new Date(2023, 8, 25, 11, 30),
    },
    {
      title: 'Team Workshop',
      start: new Date(2023, 8, 26, 14, 0),
      end: new Date(2023, 8, 26, 16, 0),
    },
    {
      title: 'Product Launch',
      start: new Date(2023, 8, 28, 9, 0),
      end: new Date(2023, 8, 28, 11, 0),
    },
  ];

  const [events, setEvents] = useState(initialEvents);
  const [isFocused, setIsFocused] = useState(false);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('Enter event title:');
    if (title) {
      const newEvent = {
        start,
        end,
        title,
      };
      setEvents([...events, newEvent]);
    }
  };

  return (
    <div style={{ height: '100vh', padding: '20px' }}>
      <h1>Schedule Calendar</h1>
      <CSSTransition
        in={isFocused}
        classNames="calendar-animation"
        timeout={300}
        unmountOnExit
      >
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectSlot={handleSelect}
          style={{ height: '80%' }}
          onMouseEnter={() => setIsFocused(true)}
          onMouseLeave={() => setIsFocused(false)}
        />
      </CSSTransition>
    </div>
  );
};

export default Schedule;
