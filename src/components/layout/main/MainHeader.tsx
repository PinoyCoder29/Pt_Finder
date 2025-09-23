export default function MainHeader() {
  return(
    <>
    <nav className="navbar navbar-expand-md navbar-light bg-light shadow">
      <div className="container">
      <h1 className="navbar-brand">Pt_Finder</h1>

          <button className="navbar-toggler"
           type="button"
            data-bs-toggle="offcanvas"
             data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling">
                <span className="navbar-toggler-icon"></span>
              </button>

          <div className="offcanvas offcanvas-start" style={{width:'50%'}} data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Menu</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
             
            
              <ul className="navbar-nav mx-auto">
                <li className="nav-item"><a href="" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="" className="nav-link">About</a></li>
                <li className="nav-item"><a href="" className="nav-link">Contact</a></li>
              </ul>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a href="" className="btn text-light" style={{backgroundColor:'#c90ca9ff'}}>Get Started</a></li> 
                <li className="nav-item"><a href="" className="nav-link">Sign In</a></li>
              </ul>
         
            </div>
          </div>
      </div>
    </nav>
    </>
  )
}