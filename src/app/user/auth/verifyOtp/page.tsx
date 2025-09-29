export default function VerifyOtp() {
    return(
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
                                    <p className="">
                                        Please check your email for a message with your code. Your code is 8 numbers long.
                                    </p>

                                    <input 
                                    type="text"
                                    className="p-2 "
                                    placeholder="Enter your code "
                                    />
                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-end gap-2">
                                    <button className="btn  btn-secondary">Cancel</button>
                                    <button className="btn text-light" style={{background:"#c90ca9ff"}}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}