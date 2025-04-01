
import { useEffect } from 'react';
import { useAuthStore, useForm } from '../../hooks';
import './login.css';
import Swal from 'sweetalert2';
export const Login = () => {

    const { startLogin, startRegister, errorMessage } = useAuthStore();
    const loginFormFields = {
        loginEmail: '',
        loginPassword: ''
    }

    const registerFormFields = {
        registerName: '',
        registerEmail: '',
        registerPassword: '',
        registerPassword2: ''
    }

    const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm(loginFormFields);
    const { registerName, registerEmail, registerPassword, registerPassword2, onInputChange: onRegisterInputChange } = useForm(registerFormFields);


    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        if (registerPassword !== registerPassword2) return Swal.fire('Error', 'Las contraseñas no son iguales', 'error');
        
        startRegister({ name: registerName, email: registerEmail, password: registerPassword })
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        startLogin({email: loginEmail, password:loginPassword })
        
    }

    useEffect(()=>{
        if(errorMessage !== undefined){
           Swal.fire({
                icon: 'error',
                title: 'Error',
                text: errorMessage,
                confirmButtonText: 'Ok'
            })
        }
    },[errorMessage])


    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form
                        onSubmit={handleLoginSubmit}
                    >
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                name="loginEmail"
                                value={loginEmail}
                                onChange={onLoginInputChange}
                                className="form-control"
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                name="loginPassword"
                                value={loginPassword}
                                onChange={onLoginInputChange}
                                className="form-control"
                                placeholder="Contraseña"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form
                        onSubmit={handleRegisterSubmit}
                    >
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                name="registerName"
                                value={registerName}
                                onChange={onRegisterInputChange}
                                className="form-control"
                                placeholder="Nombre"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                name="registerEmail"
                                value={registerEmail}
                                onChange={onRegisterInputChange}
                                className="form-control"
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                name="registerPassword"
                                value={registerPassword}
                                onChange={onRegisterInputChange}
                                className="form-control"
                                placeholder="Contraseña"
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                name="registerPassword2"
                                value={registerPassword2}
                                onChange={onRegisterInputChange}
                                className="form-control"
                                placeholder="Repita la contraseña"
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}