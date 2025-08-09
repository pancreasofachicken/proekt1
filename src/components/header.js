const Header = () => {
    return ( <div>
    
    <nav className="navbar navbar-expand-lg bg-danger text-light">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">
      <img src="https://preview.colorlib.com/theme/personalportfolio/assets/img/logo/logo.png" alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse mx-e" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item text-light">
          <a className="nav-link text-light active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item text-light">
          <a className="nav-link text-light" href="#">Features</a>
        </li>
        <li className="nav-item text-light">
          <a className="nav-link text-light" href="#">Pricing</a>
        </li>
        <li className="nav-item text-light dropdown">
          <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item text-light" href="#">Action</a></li>
            <li><a className="dropdown-item text-light" href="#">Another action</a></li>
            <li><a className="dropdown-item text-light" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div> );
}
 
export default Header;