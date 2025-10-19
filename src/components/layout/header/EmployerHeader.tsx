"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function EmployerHeader() {
  const pathName = usePathname();

  const menuItems = [
    { name: "Dashboard", path: "/employer" },
    { name: "Profile", path: "/employer/profile" },
    { name: "Job Posts", path: "/employer/job-posts" },
    { name: "Post a Job", path: "/employer/postAJob" },
    { name: "Applicants", path: "/employer/applicants" },
    { name: "Interview Schedules", path: "/employer/interviews" },
    { name: "Messages", path: "/employer/messages" },
  ];

  const logoutItem = { name: "Logout", path: "/employer/logout" };

  return (
    <aside
      className="d-none d-md-flex flex-column justify-content-between bg-light position-fixed vh-100 top-0 start-0 shadow"
      style={{ width: "180px" }}
    >
      {/* Menu Section */}
      <div>
        <h4 className="text-center m-3 fw-bold">Menu</h4>
        <nav className="text-center">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`d-block py-2 px-3 text-decoration-none rounded ${
                pathName === item.path ? "text-white" : "text-dark"
              }`}
              style={{
                backgroundColor:
                  pathName === item.path ? "#70379E" : "transparent",
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Logout Section */}
      <div className="text-center mb-3">
        <Link
          href={logoutItem.path}
          className={`d-block py-2 px-3 text-decoration-none rounded ${
            pathName === logoutItem.path ? "text-white" : "text-danger"
          }`}
          style={{
            backgroundColor:
              pathName === logoutItem.path ? "#70379E" : "transparent",
          }}
        >
          {logoutItem.name}
        </Link>
      </div>
    </aside>
  );
}
