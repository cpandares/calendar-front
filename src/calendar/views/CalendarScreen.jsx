import { Calendar } from 'react-big-calendar';
import { addHours } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { useState } from 'react';

import { getMessages, localizer } from '../../helpers';
import { CalendarEvent, Navbar,CalendarModal, FloatActionButton, ButtonDelete } from '..';
import { useUiStore,useCalendarStore } from '../../hooks';





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
  const { hasEventSelected }  = useCalendarStore()
  const [ onView, setOnView ] = useState(localStorage.getItem('lastViewEvent') || 'month');
  const { events,setActiveEvent } = useCalendarStore();

  const onDoubleClick = ()=>{
    openModalEvent()
  }
  
  const onSelect = (event)=>{
    setActiveEvent(event)
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
          events={events}
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
          <FloatActionButton />
          {
            hasEventSelected &&
              <ButtonDelete />  
          }
    </>
  )
}
