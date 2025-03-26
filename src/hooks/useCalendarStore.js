import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../store/calendar/calendarSlice';


export const useCalendarStore = () => {
    
    const { events, activeEvents } = useSelector( state=>state.calendar );
    const dispatch = useDispatch();

    
    const setActiveEvent = (calendarEvent)=>{
        
        dispatch(onSetActiveEvent(calendarEvent))
    }


    const startSavingEvent = async(calendarEvent)=>{

        if(calendarEvent._id){
            /* update */
            onUpdateEvent( calendarEvent )
        }else{
            /* store */
            dispatch(onAddNewEvent(calendarEvent))
        }

    }

    const startDeleteEvent = ()=>{
        dispatch(onDeleteEvent())
    }

    return {
        /* propiedades */
        activeEvents,
        events,
        hasEventSelected: !!activeEvents,
        /* metodos */
        setActiveEvent,
        startSavingEvent,
        startDeleteEvent
    }
}
