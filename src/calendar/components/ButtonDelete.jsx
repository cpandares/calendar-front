import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../hooks"


export const ButtonDelete = () => {


    const { startDeleteEvent, hasEventSelected } = useCalendarStore();
    const { isDateModalOpen } = useUiStore();

    const handleDeleteEvent = ()=>{
        startDeleteEvent();
    }
   

  return (
    <>
        {
           (hasEventSelected & !isDateModalOpen) &&
            ( <button 
                onClick={handleDeleteEvent}
                className="btn btn-outline-danger fab-danger">
                <i className="fas fa-trash-alt"></i>
            </button> )
        }
    
    </>
   
  )
}
