"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function SignIn() {
   const router = useRouter()
    const [formData,setFormData] = useState({
        email:"",
        password:"",
    })
    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }
   
    const handleSignInSubmit = async (e:FormEvent)=>{
        e.preventDefault()
        try {
            const response = await axios.post("/api/user/auth/signIn",formData)
            if(response.status === 200){
                toast.success(response.data.message)
            }
            router.push("/user/home")
        } catch (error:any) {
            if(error.response.status === 400){
                toast.error(error.response.data.message)
            }
        }
    }
  return (
    <section className="p-5">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8">
            <div className="row shadow rounded overflow-hidden">
              
              {/* Left side - Description */}
              <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center p-4 text-white" style={{background: "linear-gradient(to right, #5e3154ff, #da28bcff) "}}>
                <h2 className="fw-bold mb-3">Welcome Back!</h2>
                <p style={{ maxWidth: "280px", fontSize: "0.9rem" }}>
                  Sign in to access your account and continue exploring new
                  opportunities. Manage your profile, connect with others, and
                  stay updated with the latest features we offer.
                </p>
              </div>

              {/* Right side - Sign In Form */}
              <div className="col-md-6 bg-white p-4">
                <h2 className="fw-bold mb-4 text-center">Sign In</h2>
                <form onSubmit={handleSignInSubmit}>
                  {/* Email */}
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      className="form-control shadow-sm"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="form-control shadow-sm"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn text-white px-5"
                      style={{ backgroundColor: "#c90ca9ff" }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
        <ToastContainer theme="dark"/>
      </div>
    </section>
  );
}
