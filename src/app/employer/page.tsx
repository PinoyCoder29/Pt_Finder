export default function Home() {
  return (
    <div>
      <main>
        <div className="row">
          {/* Main content area */}
          <div className="col-md-8 shadow">
            <div className="bg-white shadow-sm rounded p-4 mb-4">
              
              {/* Header Section (Hi + Notifications aligned horizontally) */}
              <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                <div>
                  <h4 className="fw-bold">Hi, Employer 👋</h4>
                  <p className="mb-0" style={{ color: "#70379eff" }}>
                    Let's finish your task today!
                  </p>
                </div>

                <div className="text-end mt-2 mt-md-0">
                  <button className="btn btn-sm btn-outline-primary">🔔 Notifications</button>
                </div>
              </div>

              {/* Today Task Section */}
              <div className="pt-3 mb-4">
                <h2 className="fw-semibold">Today’s Task</h2>
                <p className="mb-0" style={{ color: "#70379eff" }}>
                  Check your daily tasks and schedules
                </p>
                <button className="mt-2 btn text-white" style={{ backgroundColor: "#70379eff" }}>
                  Today's Schedule
                </button>
              </div>

              {/* Dashboard Cards Section (responsive) */}
              <div className="row text-center">
                <div className="col-12 col-sm-6 col-md-4 mb-3">
                  <div className="p-3 rounded shadow-sm" style={{ backgroundColor: "#b3a5c4ff" }}>
                    <h5 className="fw-bold" style={{ color: "#70379eff" }}>5</h5>
                    <p className="mb-0">Interviews</p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-4 mb-3">
                  <div className="p-3 rounded shadow-sm" style={{ backgroundColor: "#839eb4ff" }}>
                    <h5 className="fw-bold" style={{ color: "#007bff" }}>8</h5>
                    <p className="mb-0">Applicants</p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-4 mb-3">
                  <div className="p-3 rounded shadow-sm" style={{ backgroundColor: "#90c094ff" }}>
                    <h5 className="fw-bold" style={{ color: "#28a745" }}>3</h5>
                    <p className="mb-0">Hired</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side (Quick Stats) */}
          <div className="col-md-4">
            <div className="bg-light shadow-sm rounded p-4">
              <h5 className="fw-bold">Quick Stats</h5>
              <p className="mb-0 text-muted">0 Active Job Posts</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
