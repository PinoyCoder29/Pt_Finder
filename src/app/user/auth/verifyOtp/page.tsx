"use client"
import axios from "axios"
import { useSearchParams } from "next/navigation"
import React, { useState } from "react"
import { toast, ToastContainer } from "react-toastify"

interface VerifyOtpForm {
    email: string,
    otp: string,
}   

export default function VerifyOtp() {

    const searchParams = useSearchParams()
    const emailFormQuery = searchParams.get("email") || "";
    const [formData, setFormData] = useState<VerifyOtpForm>({
        email: emailFormQuery,
        otp: '', 
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleVerifyOtpSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const response = await axios.post('/api/user/auth/verifyOtp', formData)

            if(response.status === 201){
                toast.success(response.data.message)
            }      
        } catch (error: any) {
            if(error.response?.status === 400){
                toast.error(error.response.data.message)
            } else {
                toast.error("Something went wrong")
            }
        }
    }

    return (
        <>
        <section className="p-5">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow">
                            <div className="card-header">
                                <h4>Enter security code</h4>
                            </div>
                            <div className="card-body">
                                <p>
                                    Please check your email for a message with your code. Your code is 8 numbers long.
                                </p>

                                <form onSubmit={handleVerifyOtpSubmit}>
                                    <input 
                                        type="text"
                                        name="otp"
                                        value={formData.otp}
                                        onChange={handleChange}
                                        className="p-2  "
                                        placeholder="Enter your code"
                                    />

                                    <div className="d-flex justify-content-end gap-2">
                                        <button type="button" className="btn btn-secondary">Cancel</button>
                                        <button type="submit" className="btn text-light" style={{background:"#c90ca9ff"}}>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer theme="dark"/>
        </section>
        </>
    )
}
