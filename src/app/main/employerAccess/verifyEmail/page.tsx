  "use client";

  import { useState } from "react";
  import Link from "next/link";
  import axios from "axios";
  import { toast} from "react-toastify";
  import { useRouter } from "next/navigation";

  interface FormData {
    firstName: string;
    lastName: string;
    position: string,
    email: string;
    contact: string;
    password: string;
  }

  export default function VerifyEmail() {
    const router = useRouter()
    const [formData, setFormData] = useState<FormData>({
      firstName: "",
      lastName: "",
      position: "",
      email: "",
      contact: "",
      password: "",
    });

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const response = await axios.post("/api/employer/auth/verifyEmail",formData);
        if(response.status === 201){
          toast.success(response.data.message)
        }
      router.push(`/main/employerAccess/verifyOtp?email=${formData.email}`)
      } catch (error: any) {
        if(error.response.status === 400){
          toast.error(error.response.data.message)
        }
      }
    };

    return (
      <div className="p-1 p-md-4 shadow">
        
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-10">
              <div className="row rounded shadow overflow-hidden">
                {/* Left side */}
                <div
                  className="col-md-6 col-12 p-4 d-flex flex-column justify-content-center align-items-center text-center text-white"
                  style={{
                    background: "linear-gradient(to right, #5e3154ff, #144ba3ff)",
                    minHeight: "280px",
                  }}
                >
                  <div className="mb-3">
                    <i className="bi bi-envelope-fill fs-1"></i>
                  </div>
                  <h2>Employer Access</h2>
                  <h3 className="fw-bold mb-2">Verify Your Email Address</h3>
                  <p style={{ maxWidth: "300px", margin: "0 auto", fontSize: "0.9rem" }}>
                    Please check your inbox for a verification email. Clicking the link inside will
                    activate your account so you can start posting jobs and connecting with top talent.
                  </p>
                </div>

                {/* Right side (Form) */}
                <div className="col-md-6 col-12 p-4">
                  <form onSubmit={handleSubmit}>
                    {/* First & Last Name */}
                    <div className="row mb-2">
                      <div className="col-md-6 col-12 mb-2 mb-md-0">
                        <label htmlFor="firstName" className="form-label small text-muted">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="fb-input"
                        />
                      </div>
                      <div className="col-md-6 col-12">
                        <label htmlFor="lastName" className="form-label small text-muted">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="fb-input"
                        />
                      </div>
                    </div>
                     
                     {/* Position */}
                    <div className="mb-2">
                      <label htmlFor="position" className="form-label small text-muted">
                        Position
                      </label>
                      <input
                        type="position"
                        id="position"
                        name="position"
                        placeholder="e.g. HR Manager/Owner/Recruiter"
                        value={formData.position}
                        onChange={handleChange}
                        className="fb-input"
                      />
                    </div>
                  
                    {/* Email */}
                    <div className="mb-2">
                      <label htmlFor="email" className="form-label small text-muted">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="fb-input"
                      />
                    </div>
                      
                      {/* Contact */}
                     <div className="mb-2">
                      <label htmlFor="contact" className="form-label small text-muted">
                        Contact
                      </label>
                      <input
                        type="contact"
                        id="contact"
                        name="contact"
                        placeholder="ex:09xxxxxxxxx"
                        value={formData.contact}
                        onChange={handleChange}
                        className="fb-input"
                      />
                    </div>

                    {/* Password */}
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label small text-muted">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="fb-input"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="d-flex justify-content-center mb-2">
                      <button type="submit" className="btn btn-primary px-5">
                        Submit
                      </button>
                    </div>

                    {/* Sign In Link */}
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
