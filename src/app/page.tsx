"use client";

import Image from "next/image";
import background from "@/image/background.png";

export default function Home() {
  return (
    <div>
      <div className="p-5">
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-md-6 px-5">
              <p>FOR STUDENTS IN QUEZON</p>
              <h2 style={{ fontSize: "60px" }}>
                <strong style={{ color: "#c90ca9ff", fontSize: "65px" }}>
                  Empower
                </strong>{" "}
                <span style={{ fontSize: "50px" }}>
                  Students To Find Jobs In Quezon
                </span>
              </h2>
              <p>
                ptFINDER is a platform designed to connect students with
                flexible part-time opportunities in Quezon Province — helping
                them gain experience, earn income, and support their local
                communities.
              </p>

              <div className="d-flex gap-3">
                <button
                  className="btn text-white"
                  style={{ backgroundColor: "#c90ca9ff" }}
                >
                  Find Your Job
                  <span className="px-2">
                    <i className="bi bi-person-circle"></i>
                  </span>
                </button>
                <a className="btn btn-dark" href="/Employer-login">
                  Post a Job
                </a>     
              </div>
            </div>

            {/* Right Column with Image */}
            <div className="col-md-6 d-flex justify-content-center align-items-center mt-4 mt-md-0">
              <div
                style={{
                  width: "100%",
                  maxWidth: "450px",
                  height: "70vh",
                  background: "linear-gradient(to right, #cebca7ff, #c90ca9ff)",
                  borderRadius: "40px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={background}
                  alt="Hero"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
