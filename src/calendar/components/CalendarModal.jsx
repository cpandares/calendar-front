import Modal from 'react-modal';
import { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addHours, differenceInSeconds } from 'date-fns';
import { es } from 'date-fns/locale/es';
import Swal from 'sweetalert2';
import { useMemo } from 'react';
import { useUiStore } from '../../hooks';

registerLocale('es', es)

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 4,

    },
};
export const CalendarModal = () => {

     const { isDateModalOpen , onCloseModalEvent} = useUiStore();
    
    const [ isSubmitted, setIsSubmitted ] = useState(false);
    const [ formValues, setFormValues ] = useState({
        title: '',
        notes: '',
        start: new Date(),
        end: addHours(new Date(), 2)

    })


    const closeModal = () => {
        
        onCloseModalEvent()
    }

    const onInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const onDateChange = (e, changing) => {
        setFormValues({
            ...formValues,
            [changing]: e
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setIsSubmitted(true);

        const diffDate = differenceInSeconds( formValues.end, formValues.end );
        
        if(isNaN(diffDate) || diffDate < 0){
            return  Swal.fire({
                title:'Verifica las fechas',
                icon:'warning',
            })
             
        }

        if(formValues.title.length === 0) return

    }

    const titleClass =useMemo(()=>{

        if(!isSubmitted) return '';

        return ( formValues.title.length ) === 0 && 'is-invalid'

    },[formValues.title, isSubmitted])

    return (
        <Modal
            isOpen={ isDateModalOpen }
            onRequestClose={closeModal}
            style={customStyles}
            className='modal'
            overlayClassName='modal-fondo'
            closeTimeoutMS={200}
            
        >
            <h1> Nuevo evento </h1>
            <hr />
            <form
                 className="container"
                 onSubmit={handleSubmit}
                 >

                <div className="form-group mb-2">
                    <label>Fecha y hora inicio</label>
                    <DatePicker
                        selected={formValues.start}
                        onChange={(e) => onDateChange(e, 'start')}
                        className="form-control"
                        dateFormat="Pp"
                        showTimeSelect
                        locale="es"
                        timeCaption='Hora'
                    />

                </div>

                <div className="form-group mb-2">
                    <label>Fecha y hora fin</label>
                    <DatePicker
                        minDate={formValues.start}
                        selected={formValues.end}
                        onChange={(e) => onDateChange(e, "end")}
                        className="form-control"
                        dateFormat="Pp"
                        showTimeSelect
                        locale="es"
                        timeCaption="Hora"
                    />
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label>Titulo y notas</label>
                    <input
                        type="text"
                        className={`form-control ${titleClass}`}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={formValues.title}
                        onChange={onInputChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group mb-2">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={formValues.notes}
                        onChange={onInputChange}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}
