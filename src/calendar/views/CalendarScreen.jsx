import { Calendar } from 'react-big-calendar';
import { addHours } from 'date-fns';

import 'react-big-calendar/lib/css/react-big-calendar.css'

import { Navbar } from '..';
import { getMessages, localizer } from '../../helpers';


const myEventsList = [
  {
    title: 'Estudiar',
    notes: 'Come',
    start: new Date(),
    end: addHours(new Date(), 2)
  }
]

const evenStyleGetter = (event, start, end, isSelected) =>{
  console.log({event, start, end, isSelected})

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
  return (
    <>
      <Navbar />

        <Calendar
          culture='es'
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 'calc(100vh - 80px)' }}
          messages={getMessages()}
          eventPropGetter={ evenStyleGetter }
      />
  
    </>
  )
}
