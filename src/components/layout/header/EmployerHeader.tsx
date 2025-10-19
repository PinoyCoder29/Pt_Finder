"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function EmployerHeader() {
  const pathName = usePathname()
  const menuItem = [
    { name: "Dashboard", path: "/employer" },
    { name: "Profile", path: "/employer/profile" },
    { name: "Job Posts", path: "/employer/job-posts" },
    { name: "Post a Job", path: "/employer/post-job" },
    { name: "Applicants", path: "/employer/applicants" },
    { name: "Interview Schedules", path: "/employer/interviews" },
    { name: "Messages", path: "/employer/messages" },
  ]

  const logoutItem = { name: "Logout", path: "/employer/logout" }

  return (
    <div>
      <aside
        className="d-none d-md-flex flex-column justify-content-between bg-light position-fixed vh-100 top-0 start-0 shadow"
        style={{ width: "180px" }}
      >
        <div>
          <h4 className="text-center m-3 fw-bold">Menu</h4>
          <nav className="text-center">
            {menuItem.map((item) => {
              const isActive = pathName === item.path
              return (
                <Link
                  href={item.path}
                  key={item.path}
                  className="d-block py-2 px-3 text-decoration-none rounded"
                  style={{
                    backgroundColor: isActive ? "#70379eff" : "transparent",
                    color: isActive ? "#fff" : "#000",
                    fontWeight: isActive ? "bold" : "normal",
                    transition: "0.3s ease",
                  }}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Logout sa ibaba */}
        <div className="text-center mb-3">
          <Link
            href={logoutItem.path}
            className="d-block py-2 text-decoration-none rounded"
            style={{
              backgroundColor:
                pathName === logoutItem.path ? "#dc3545" : "transparent",
              color: pathName === logoutItem.path ? "#fff" : "#dc3545",
              fontWeight: "bold",
            }}
          >
            {logoutItem.name}
          </Link>
        </div>
      </aside>
    </div>
  )
}
