import { useDispatch } from "react-redux"
import { logout } from "../../store";
import { useAuthStore } from "../../hooks";


export const Navbar = () => {

   const dispatch = useDispatch();
   const { user } = useAuthStore();

    const handleLogout = () => {
        dispatch(logout())
        localStorage.clear();
    }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <i className="fas fa-calendar-alt">
        </i>
          {user.name}
        </a>
  
    
    <div className="float-end">
        <button 
        onClick={handleLogout}
        className="btn btn-outline-danger">
        <i className="fas fa-sign-out-alt"></i>
            <span>
            Logout
            </span>
        </button>
    </div>
  </div>
</nav>

  )
}
