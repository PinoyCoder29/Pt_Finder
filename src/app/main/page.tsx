"use client";

import Image from "next/image";
import background from "@/image/background.png";

export default function Home() {
  return (
    <div className="min-vh-100">
      {/* Hero Section */}
      <section className="">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            {/* Left Column */}
            <div className="col-lg-6 col-md-12 order-2 order-lg-1">
              <div className="px-2 px-sm-3 px-lg-5 py-4 py-lg-0">
                {/* Badge */}
                <div className="mb-3">
                  <span className="badge bg-light text-dark px-3 py-2 rounded-pill fs-6 fs-sm-7">
                    <i className="bi bi-geo-alt-fill me-2"></i>
                    FOR STUDENTS IN QUEZON
                  </span>
                </div>

                {/* Main Heading - Responsive Typography */}
                <h1 className="mb-4 lh-1">
                  <strong 
                    className="d-block mb-2"
                    style={{ 
                      color: "#c90ca9ff", 
                      fontSize: "clamp(2.5rem, 8vw, 4rem)"
                    }}
                  >
                    Empower
                  </strong>
                  <span 
                    className="text-dark fw-bold hook-text"
                    style={{ 
                      fontSize: "clamp(1.8rem, 6vw, 3rem)",
                      lineHeight: "1.2"
                    }}
                  >
                    Students To Find Jobs In Quezon
                  </span>
                </h1>

                {/* Description */}
                <p className="mb-4 fs-6 fs-md-5 text-muted" style={{ lineHeight: "1.6" }}>
                  ptFINDER is a platform designed to connect students with
                  flexible part-time opportunities in Quezon Province — helping
                  them gain experience, earn income, and support their local
                  communities.
                </p>

                {/* Buttons - Responsive Stack */}
                <div className="d-flex flex-column flex-sm-row gap-3 mb-4">
                  <button
                    className="btn text-white px-4 py-3 fw-semibold rounded-3 shadow-sm flex-fill flex-sm-grow-0"
                    style={{ 
                      backgroundColor: "#c90ca9ff",
                      fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
                      minWidth: "200px",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#b0099a";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 8px 25px rgba(201,12,169,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#c90ca9ff";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
                    }}
                  >
                    <i className="bi bi-search me-2"></i>
                    Find Your Job
                  </button>
                  
                  <a 
                    className="btn btn-outline-dark px-4 py-3 fw-semibold rounded-3 shadow-sm flex-fill flex-sm-grow-0 text-decoration-none"
                    href="/Employer-login"
                    style={{
                      fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
                      minWidth: "200px",
                      borderWidth: "2px",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#212529";
                      e.currentTarget.style.color = "white";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 8px 25px rgba(33,37,41,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#212529";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
                    }}
                  >
                    <i className="bi bi-plus-circle me-2"></i>
                    Post a Job
                  </a>
                </div>

                {/* Stats Section - Hidden on very small screens */}
                <div className="row g-3 d-none d-sm-flex">
                  <div className="col-4">
                    <div className="text-center">
                      <div className="h4 fw-bold text-primary mb-1">500+</div>
                      <small className="text-muted fw-medium">Active Students</small>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="text-center">
                      <div className="h4 fw-bold text-success mb-1">150+</div>
                      <small className="text-muted fw-medium">Job Postings</small>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="text-center">
                      <div className="h4 fw-bold text-warning mb-1">95%</div>
                      <small className="text-muted fw-medium">Success Rate</small>
                    </div>
                  </div>
                </div>

                {/* Mobile Stats - Show only on small screens */}
                <div className="d-flex d-sm-none justify-content-around bg-light rounded-3 p-3">
                  <div className="text-center">
                    <div className="fw-bold text-primary">500+</div>
                    <small className="text-muted">Students</small>
                  </div>
                  <div className="text-center">
                    <div className="fw-bold text-success">150+</div>
                    <small className="text-muted">Jobs</small>
                  </div>
                  <div className="text-center">
                    <div className="fw-bold text-warning">95%</div>
                    <small className="text-muted">Success</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column with Image - FIXED */}
            <div className="col-lg-6 col-md-12 order-1 order-lg-2  mb-lg-0">
              <div className="d-flex justify-content-center align-items-center px-2 px-sm-3">
                <div
                  className="position-relative shadow-lg"
                  style={{
                    width: "90%",
                    maxWidth: "500px",
                    height: "clamp(400px,40vh, 650px)", // Increased height
                    background: "linear-gradient(135deg, #cebca7ff 0%, #c90ca9ff 100%)",
                    borderRadius: "clamp(20px, 5vw, 40px)",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={background}
                    alt="Students finding part-time jobs in Quezon Province"
                    fill
                    style={{ 
                      objectFit: "contain", // Changed from "cover" to "contain"
                      objectPosition: "center top" // Position image at top center to align with "Empower"
                    }}
                    priority
                    sizes="(max-width: 508px) 90vw, (max-width: 1200px) 50vw, 400px"
                  />
                  
                  {/* Overlay for better contrast - adjusted opacity */}
                  <div 
                    className="position-absolute w-100 h-100"
                    style={{
                      background: "linear-gradient(45deg, rgba(201,12,169,0.05) 0%, transparent 50%)", // Reduced opacity
                      top: 0,
                      left: 0
                    }}
                  />

                  {/* Floating notification - responsive positioning */}
                  <div 
                    className="position-absolute bg-white shadow rounded-3 p-2 p-sm-3 d-none d-md-block"
                    style={{
                      bottom: "20px",
                      left: "20px",
                      maxWidth: "200px",
                      fontSize: "0.85rem",
                      zIndex: 10 // Added z-index to ensure it's above the image
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <div 
                        className="rounded-circle me-2 d-flex align-items-center justify-content-center"
                        style={{
                          width: "35px",
                          height: "35px",
                          backgroundColor: "#c90ca9ff",
                          color: "white"
                        }}
                      >
                        <i className="bi bi-briefcase-fill"></i>
                      </div>
                      <div>
                        <div className="fw-bold small">New Job Alert!</div>
                        <div className="text-muted small">Part-time Tutor</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Responsive */}
      <section className="py-5 bg-light">
        <div className="container">
          {/* Section Header */}
          <div className="row text-center mb-5">
            <div className="col-12 col-lg-8 mx-auto">
              <h2 className="h1 fw-bold mb-3" style={{ fontSize: "clamp(1.8rem, 5vw, 2.5rem)" }}>
                Why Choose ptFINDER?
              </h2>
              <p className="lead text-muted fs-6 fs-md-5">
                We connect ambitious students with meaningful opportunities
              </p>
            </div>
          </div>
          
          {/* Feature Cards - Responsive Grid */}
          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100 text-center p-3 p-lg-4 rounded-4">
                <div 
                  className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "rgba(201,12,169,0.1)",
                    color: "#c90ca9"
                  }}
                >
                  <i className="bi bi-clock-fill fs-4"></i>
                </div>
                <h5 className="fw-bold mb-3">Flexible Hours</h5>
                <p className="text-muted mb-0">Work around your class schedule with part-time opportunities.</p>
              </div>
            </div>
            
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100 text-center p-3 p-lg-4 rounded-4">
                <div 
                  className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "rgba(40,167,69,0.1)",
                    color: "#28a745"
                  }}
                >
                  <i className="bi bi-geo-alt-fill fs-4"></i>
                </div>
                <h5 className="fw-bold mb-3">Local Focus</h5>
                <p className="text-muted mb-0">Find opportunities right in your community in Quezon Province.</p>
              </div>
            </div>
            
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card border-0 shadow-sm h-100 text-center p-3 p-lg-4 rounded-4">
                <div 
                  className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "rgba(255,193,7,0.1)",
                    color: "#ffc107"
                  }}
                >
                  <i className="bi bi-trophy-fill fs-4"></i>
                </div>
                <h5 className="fw-bold mb-3">Build Experience</h5>
                <p className="text-muted mb-0">Gain valuable work experience while earning income.</p>
              </div>
            </div>
          </div>

          {/* Call to Action - Responsive */}
          <div className="text-center mt-5">
            <div className="bg-white rounded-4 shadow-lg p-4 p-md-5 mx-auto" style={{ maxWidth: "600px" }}>
              <h3 className="fw-bold mb-3" style={{ fontSize: "clamp(1.3rem, 4vw, 1.8rem)" }}>
                Ready to Get Started?
              </h3>
              <p className="text-muted mb-4 fs-6 fs-md-5">
                Join thousands of students who have already found their perfect part-time job.
              </p>
              <button 
                className="btn btn-lg px-4 py-3 text-white shadow-lg border-0 rounded-3"
                style={{ 
                  backgroundColor: "#c90ca9ff",
                  fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
                  minWidth: "200px"
                }}
              >
                <i className="bi bi-rocket-takeoff me-2"></i>
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Responsive Styles */}
      <style jsx>{`
        /* Custom responsive utilities */
        @media (max-width: 576px) {
          .min-vh-100 {
            min-height: auto;
          }
          
          .container {
            padding-left: 15px;
            padding-right: 15px;
          }
        }

        @media (max-width: 768px) {
          .order-1 {
            order: 1;
          }
          .order-2 {
            order: 2;
          }
        }

        @media (min-width: 992px) {
          .order-lg-1 {
            order: 1;
          }
          .order-lg-2 {
            order: 2;
          }
        }

        /* Smooth transitions for interactive elements */
        .btn {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
        }

        /* Ensure proper spacing on all devices */
        @media (min-width: 1400px) {
          .container {
            max-width: 1320px;
          }
        }

        /* Fix for very small devices */
        @media (max-width: 375px) {
          .px-2 {
            padding-left: 10px !important;
            padding-right: 10px !important;
          }
        }
      `}</style>
    </div>
  );
}