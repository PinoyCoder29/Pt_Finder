import Link from "next/link";

export default function MainHeader() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light shadow">
        <div className="container">
          <h1 className="navbar-brand">Pt_Finder</h1>

          {/* Toggle button for offcanvas */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Offcanvas menu (with both scrolling & backdrop) */}
          <div
            className="offcanvas offcanvas-start" style={{width:'50%'}}
            data-bs-scroll="true"
            tabIndex={-1}
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body d-flex flex-column text-center">
              {/* Left links */}
              <ul className="navbar-nav mb-3">
                <li className="nav-item">
                  <Link href="/" className="nav-link" data-bs-dismiss="offcanvas">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about" className="nav-link" data-bs-dismiss="offcanvas">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact" className="nav-link" data-bs-dismiss="offcanvas">
                    Contact
                  </Link>
                </li>
              </ul>

              {/* Right links */}
              <ul className="navbar-nav">
                <li className="nav-item mb-2">
                  <Link
                    href="/auth/signUp"
                    className="btn text-light w-100"
                    style={{ backgroundColor: "#c90ca9ff" }}
                    data-bs-dismiss="offcanvas"
                  >
                    Get Started
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/signIn" className="nav-link" data-bs-dismiss="offcanvas">
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
