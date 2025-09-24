"use client";

import { useState } from "react";
import Link from "next/link";

interface FormData {
  firstName: string;
  lastName: string;
  birthdate: string;
  gender: string;
  email: string;
  password: string;
}

export default function VerifyEmail() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    birthdate: "",
    gender: "",
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // dito mo ilalagay yung API call mo para mag send ng email verification
  };

  return (
    <div className="p-5">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8">
            <div className="row rounded shadow overflow-hidden">
              {/* Left side */}
              <div className="col-md-6 p-0">
                <div
                  className="flex-column d-flex justify-content-center align-items-center text-center p-4 text-white"
                  style={{
                    background: "linear-gradient(to right, #5e3154ff, #da28bcff)",
                    width: "100%",
                    height: "100%",
                    minHeight: "50vh",
                  }}
                >
                  <div className="mb-4">
                    <i className="bi bi-envelope-fill fs-1"></i>
                  </div>
                  <h3 className="fw-bold mb-3">Verify Your Email Address</h3>
                  <p style={{ maxWidth: "300px", margin: "0 auto" }}>
                    Please check your inbox for a verification email. Clicking
                    the link inside will activate your account so you can start
                    posting jobs and connecting with top talent.
                  </p>
                </div>
              </div>

              {/* Right side (Form) */}
              <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                  <div className="row p-3">
                    <div className="col-md-6 col-6">
                      <input
                        type="text"
                        name="firstName"
                        className="form-control shadow"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 col-6">
                      <input
                        type="text"
                        name="lastName"
                        className="form-control shadow"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="mb-2">
                    <input
                      type="date"
                      name="birthdate"
                      className="form-control shadow"
                      value={formData.birthdate}
                      onChange={handleChange}
                    />
                  </div>

                  <select
                    name="gender"
                    className="form-control shadow mb-2"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>

                  <div className="mb-2">
                    <input
                      type="email"
                      name="email"
                      placeholder="example@gmail.com"
                      className="form-control shadow"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-2">
                    <input
                      type="password"
                      name="password"
                      className="form-control shadow"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="d-flex justify-content-center mb-1">
                    <button type="submit" className="btn btn-primary px-5">
                      Submit
                    </button>
                  </div>

                  <div className="d-flex justify-content-center mb-3">
                    <Link href="/Employer-login" className="nav-link">
                      You have an account?
                      <span className="text-primary"> Sign In</span>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
