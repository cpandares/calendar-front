import { Provider } from 'react-redux';
import { RouterApp } from './router';
import Modal from 'react-modal';
import { store } from './store';


Modal.setAppElement('#root');

export const CalendarApp = () => {
  return (
    <>
     <Provider store={ store }>
      <RouterApp />

     </Provider>
    </>
  )
}
