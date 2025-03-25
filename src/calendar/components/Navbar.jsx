

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <i className="fas fa-calendar-alt">
        </i>
        
        Navbar</a>
  
    
    <div className="float-end">
        <button className="btn btn-outline-danger">
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
