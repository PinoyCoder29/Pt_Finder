export default function PostAJob() {
  return (
    <main>
      <div className="py-3 bg-light">
        <div className="container">
          <div className="card shadow-lg border-0 p-4">
            <div className="mb-4">
              <h2 className="fw-bold text-dark">POST A JOB</h2>
              <p className="text-muted">
                Create a new job listing for your organization
              </p>
            </div>

            {/* JOB INFORMATION */}
            <form className="py-3 border rounded p-4 mb-4">
              <section title="1. JOB INFORMATION" className="">
                <h5 className="text-primary fw-bold border-bottom pb-2 mb-3">
                  1. JOB INFORMATION
                </h5>

                <div className="row">
                  {/* Job Title */}
                  <div className="col-md-6 mb-3">
                    <label className="fw-bold mb-1">Job Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter job title"
                    />
                  </div>

                  {/* Job Category */}
                  <div className="col-md-6 mb-3">
                    <label className="fw-bold mb-1">Job Category</label>
                    <select className="form-select">
                      <option value="">Select category</option>
                      <option>Information Technology</option>
                      <option>Education</option>
                      <option>Marketing</option>
                      <option>Engineering</option>
                      <option>Healthcare</option>
                    </select>
                  </div>
                </div>

                {/* Job Type */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="fw-bold mb-1">Job Type</label>
                    <select className="form-select w-50">
                      <option value="">Select job type</option>
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Internship</option>
                      <option>Freelance</option>
                    </select>
                  </div>
                </div>

                {/* Job Description */}
                <div className="mb-3">
                  <label className="fw-bold mb-1">Job Description</label>
                  <textarea
                    className="form-control"
                    rows={4}
                    placeholder="Describe the job responsibilities and requirements..."
                  ></textarea>
                </div>
              </section>

              {/* SALARY AND BENEFITS */}
              <section>
                <h5 className="text-primary fw-bold border-bottom pb-2">
                  2. SALARY AND BENEFITS
                </h5>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="" className="fw-bold mb-1">
                      Salary Range (Min)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g., 80"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="fw-bold mb-1">
                      Salary Range (Max)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g., 120"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="" className="fw-bold mb-1">
                      Payment Type
                    </label>
                    <select name="" id="" className="form-select" required>
                      <option value="">Select Type</option>
                      <option value="">Hourly</option>
                      <option value="">Daily</option>
                      <option value="">Weekly</option>
                      <option value="">Monthly</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    {" "}
                    <label htmlFor="" className="mb-1 fw-bold">
                      Benefits (optional)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Optional: Allowance, Meals, Certificate, etc."
                    />
                  </div>
                </div>
              </section>

              {/* Work Detail  */}
              <section className="mt-4">
                <h5 className="fw-bold text-primary">3. APPLICATION DETAILS</h5>
              </section>
              {/* SUBMIT BUTTON */}
              <div className="text-end">
                <button type="submit" className="btn btn-primary px-4">
                  Submit Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
