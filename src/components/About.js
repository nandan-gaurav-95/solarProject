import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import about from "../components/assets/about.jpg"

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid bg-light overflow-hidden  px-lg-0">
        <div className="container about px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div
              className="col-lg-6 ps-lg-0 wow fadeIn"
              data-wow-delay="0.1s"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute img-fluid"
                  // src="img/about.jpg"
                  src={about}
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
            </div>
            <div
              className="col-lg-6 about-text py-5 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="p-lg-5 pe-lg-0">
                <h6 className="text-primary">About Us</h6>
                <h1 className="mb-4">We are Leading the Solar Revolution</h1>
                <p>
                  At Archanadip solar Energy, we are dedicated to advancing the
                  adoption of renewable energy, with a particular focus on solar
                  power. With over two decades of experience, we have played a
                  pivotal role in driving the solar revolution and transforming
                  the way the world harnesses energy.
                </p>
                <p>
                  Our mission is to create a sustainable future by providing
                  clean, efficient, and affordable solar solutions to homes,
                  businesses, and communities around the globe. We believe that
                  solar energy is not just a technology; it's a powerful force
                  for positive change.
                </p>
                <p>
                  With a team of passionate experts, cutting-edge technology,
                  and a commitment to environmental stewardship, we are proud to
                  be a leader in the solar industry, delivering innovative
                  solutions that reduce carbon footprints and promote energy
                  independence.
                </p>
                <p>
                  <i className="fa fa-check-circle text-primary me-3"></i>some
                  content
                </p>
                <p>
                  <i className="fa fa-check-circle text-primary me-3"></i>some
                  content
                </p>
                <p>
                  <i className="fa fa-check-circle text-primary me-3"></i>some
                  content
                </p>
                <button className="btn btn-primary rounded-pill py-3 px-5 mt-3">
                  Explore More
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
}
