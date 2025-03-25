import { useDispatch, useSelector } from "react-redux"
import { onCloseModal, onOpenModal } from "../store";


export const useUiStore = () => {
    
    const { isDateModalOpen } = useSelector( state => state.ui );
     const dispatch = useDispatch();

    const openModalEvent = ()=>{
        dispatch( onOpenModal() )
    }

    const onCloseModalEvent=()=>{
        dispatch(onCloseModal())
    }

    return {
        /* propiedades */
        isDateModalOpen,

        /* metodos */
        openModalEvent,
        onCloseModalEvent
    }

}
