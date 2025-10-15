"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UserHeader() {
  const pathname = usePathname();
   
  return (
    <div>
      {/* Desktop Navbar */}
      <nav className="navbar navbar-expand-md navbar-light bg-light shadow d-none d-md-block">
        <div className="container">
          <h1 className="navbar-brand">Pt-Finder</h1>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/user/home" className={`nav-link ${pathname === "/user/home" ? "active" : ""}`}>Job search</Link>
              </li>
              <li className="nav-item">
                <Link href="/my-jobs" className={`nav-link ${pathname === "/my-jobs" ? "active" : ""}`}>My Jobs</Link>
              </li>
              <li className="nav-item">
                <Link href="/messages" className={`nav-link ${pathname === "/messages" ? "active" : ""}`}>Message</Link>
              </li>
              <li className="nav-item">
                <Link href="/profile" className={`nav-link ${pathname === "/profile" ? "active" : ""}`}>Profile</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navbar (Shopee-style) */}
      <nav className="navbar navbar-light bg-light fixed-bottom d-md-none shadow">
        <div className="container d-flex justify-content-around">
          <Link href="/user/home" className={`text-center nav-link d-block ${pathname === "/user/home" ? "text-success" : "text-muted"}`}>
            <i className="bi bi-house-door-fill fs-4"></i>
            <div style={{ fontSize: "12px" }}>Job search</div>
          </Link>
          <Link href="/my-jobs" className={`text-center nav-link d-block ${pathname === "/my-jobs" ? "text-success" : "text-muted"}`}>
            <i className="bi bi-briefcase-fill fs-4"></i>
            <div style={{ fontSize: "12px" }}>My Jobs</div>
          </Link>
          <Link href="/messages" className={`text-center nav-link d-block ${pathname === "/messages" ? "text-success" : "text-muted"}`}>
            <i className="bi bi-chat-dots-fill fs-4"></i>
            <div style={{ fontSize: "12px" }}>Message</div>
          </Link>
          <Link href="/profile" className={`text-center nav-link d-block ${pathname === "/profile" ? "text-success" : "text-muted"}`}>
            <i className="bi bi-person-circle fs-4"></i>
            <div style={{ fontSize: "12px" }}>Profile</div>
          </Link>
        </div>
      </nav>
    </div>
  );
}
