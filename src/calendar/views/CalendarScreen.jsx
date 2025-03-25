import { Calendar } from 'react-big-calendar';
import { addHours } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { CalendarEvent, Navbar,CalendarModal } from '..';
import { getMessages, localizer } from '../../helpers';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useUiStore } from '../../hooks';


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



export const CalendarScreen = () => {

  const { openModalEvent } = useUiStore();
  const [onView, setOnView] = useState(localStorage.getItem('lastViewEvent') || 'month');

  const onDoubleClick = (event)=>{
    openModalEvent()
  }
  
  const onSelect = (event)=>{
    console.log('Click')
  }
  
  const onViewChange = (e)=>{
    localStorage.setItem('lastViewEvent' ,e )
  }

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
