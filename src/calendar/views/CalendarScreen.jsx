import { Calendar } from 'react-big-calendar';
import { addHours } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { CalendarEvent, Navbar,CalendarModal } from '..';
import { getMessages, localizer } from '../../helpers';
import { useState } from 'react';


const myEventsList = [
  {
    title: 'Estudiar',
    notes: 'Come',
    start: new Date(),
    end: addHours(new Date(), 2),
    user:{
      name:'Cesar',
      id: 'abc123'
    }
  }
]

const evenStyleGetter = (event, start, end, isSelected) =>{
  
  const style = {
    backgroundColor: '#347CF7',
    borderRadius: '0px',
    opacity:0.8,
    color: 'white'

  }

  return {
    style
  }
}

const onDoubleClick = (event)=>{
  console.log('coble click')
}

const onSelect = (event)=>{
  console.log('Click')
}

const onViewChange = (e)=>{
  localStorage.setItem('lastViewEvent' ,e )
}

export const CalendarScreen = () => {

  const [onView, setOnView] = useState(localStorage.getItem('lastViewEvent') || 'month')

  return (
    <>
      <Navbar />

        <Calendar
          culture='es'
          localizer={localizer}
          events={myEventsList}
          defaultView={onView}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 'calc(100vh - 80px)' }}
          messages={getMessages()}
          eventPropGetter={ evenStyleGetter }
          components={{
            event: CalendarEvent
          }}
          onDoubleClickEvent={ onDoubleClick }
          onSelectEvent={onSelect}
          onView={onViewChange}
      />

      <CalendarModal />
  
    </>
  )
}
