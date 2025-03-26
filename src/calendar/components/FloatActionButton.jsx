import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../hooks"


export const FloatActionButton = () => {

    const { openModalEvent } = useUiStore();
    const { setActiveEvent } = useCalendarStore();

    const handleAddNewEvent = ()=>{
        setActiveEvent({
            
            title: '',
            notes: '',
            start: new Date(),
            end: addHours(new Date(), 2),
            user:{
              name:'Cesar',
              id: 'abc123'
            }
          })
        openModalEvent()
    }

  return (
    <button 
        onClick={handleAddNewEvent}
        className="btn btn-outline-primary fab">
        <i className="fas fa-plus"></i>
    </button>
  )
}
