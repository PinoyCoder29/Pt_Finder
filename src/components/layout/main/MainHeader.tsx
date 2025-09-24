import Link from "next/link";

export default function MainHeader() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light shadow">
        <div className="container">
          <h1 className="navbar-brand">Pt_Finder</h1>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-start"
            style={{ width: "50%" }}
            data-bs-scroll="true"
            data-bs-backdrop="false"
            tabIndex={-1}
            id="offcanvasScrolling"
            aria-labelledby="offcanvasScrollingLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav mx-auto d-flex text-center mb-2">
                <li className="nav-item">
                  <Link
                    href="/"
                    className="nav-link"
                    data-bs-dismiss="offcanvas"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/about"
                    className="nav-link"
                    data-bs-dismiss="offcanvas"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/contact"
                    className="nav-link"
                    data-bs-dismiss="offcanvas"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto text-center">
                <li className="nav-item">
                  <Link
                    href="auth/signUp"
                    className="btn text-light"
                    style={{ backgroundColor: "#c90ca9ff" }}
                    data-bs-dismiss="offcanvas"
                  >
                    Get Started
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/signIn"
                    className="nav-link"
                    data-bs-dismiss="offcanvas"
                  >
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
