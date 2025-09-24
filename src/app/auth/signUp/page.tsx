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
  };

  return (
    <div className="p-3 p-md-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12">
            <div className="row rounded shadow overflow-hidden">
              {/* Left side */}
              <div
                className="col-md-6 col-12 p-4 d-flex flex-column justify-content-center align-items-center text-center text-white"
                style={{
                  background: "linear-gradient(to right, #5e3154ff, #da28bcff)",
                  minHeight: "300px",
                }}
              >
                <div className="mb-3">
                  <i className="bi bi-envelope-fill fs-1"></i>
                </div>
                <h3 className="fw-bold mb-2">Verify Your Email Address</h3>
                <p style={{ maxWidth: "300px", margin: "0 auto", fontSize: "0.9rem" }}>
                  Please check your inbox for a verification email. Clicking the link inside will
                  activate your account so you can start posting jobs and connecting with top talent.
                </p>
              </div>

              {/* Right side (Form) */}
              <div className="col-md-6 col-12 p-4">
                <form onSubmit={handleSubmit}>
                  <div className="row mb-2">
                    <div className="col-md-6 col-12 mb-2 mb-md-0">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="fb-input"
                      />
                    </div>
                    <div className="col-md-6 col-12">
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="fb-input"
                      />
                    </div>
                  </div>

                  <div className="mb-2">
                    <input
                      type="date"
                      name="birthdate"
                      value={formData.birthdate}
                      onChange={handleChange}
                      className="fb-input"
                      style={{ padding: "0.5rem" }}
                    />
                  </div>

                  <div className="mb-2">
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="fb-input"
                    >
                      <option value="" disabled>
                        Select Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="others">Others</option>
                    </select>
                  </div>

                  <div className="mb-2">
                    <input
                      type="email"
                      name="email"
                      placeholder="example@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="fb-input"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      className="fb-input"
                    />
                  </div>

                  <div className="d-flex justify-content-center mb-2">
                    <button type="submit" className="btn btn-primary px-5">
                      Submit
                    </button>
                  </div>

                  <div className="d-flex justify-content-center">
                    <Link href="/Employer-login" className="nav-link text-center">
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

      {/* Custom CSS */}
      <style jsx>{`
        .fb-input {
          width: 100%;
          padding: 0.55rem 0.75rem;
          border-radius: 6px;
          border: 1px solid #ccd0d5;
          background-color: #f0f2f5;
          transition: all 0.2s;
        }

        .fb-input:focus {
          outline: none;
          border-color: #1877f2;
          box-shadow: 0 0 0 2px rgba(24, 119, 242, 0.2);
          background-color: #fff;
        }
      `}</style>
    </div>
  );
}
