import { useDispatch, useSelector } from "react-redux"
import calendarApi from "../api/calendarApi";
import { cheking, login, logout } from "../store";


export const useAuthStore = () => {

    const { status,
        user,
        errorMessage, } = useSelector(state => state.auth)
        const dispatch = useDispatch();

    const startLogin = async ({ email, password }) => {
       
        dispatch(cheking());
        try {
            const { data } = await calendarApi.post('/auth/login', { email, password });
            
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({ name: data.user.name, uid: data.user._id }));
        } catch (error) {
            console.log(error.response.data.message);
            dispatch(logout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(cheking());
            }, 10);
        }

    }

    const startRegister = async ({ name, email, password }) => {
        dispatch(cheking());
        try {
            const { data } = await calendarApi.post('/auth/register', { name, email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({ name: data.user.name, uid: data.user.id }));
        } catch (error) {
            console.log(error.response.data.message);
            dispatch(logout(error.response.data.message));
            setTimeout(() => {
                dispatch(cheking());
            }, 10);
        }

    }

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');
        if (!token) return dispatch(logout());

        try {
            const { data } = await calendarApi.get('/auth/renewToken');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({ name: data.user.name, uid: data.user._id }));
        } catch (error) {
            localStorage.clear();
            dispatch(logout());
        }
    }

  


    return {
        startLogin,
        startRegister,
        checkAuthToken,
        
        status,
        user,
        errorMessage,
      
    }
}
