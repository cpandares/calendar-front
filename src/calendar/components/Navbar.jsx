

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <i className="fas fa-calendar-alt">
        </i>
        
        Navbar</a>
  
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
    <div className="float-end">
        <button className="btn btn-outline-danger">
        <i className="fas fa-sign-out-alt"></i>
            Logout
        </button>
    </div>
  </div>
</nav>

  )
}
