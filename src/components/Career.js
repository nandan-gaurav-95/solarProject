import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Career = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid bg-light overflow-hidden px-lg-0">
        <div className="container career-form px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 career-text py-5 wow fadeIn" data-wow-delay="0.5s">
              <div className="p-lg-5 ps-lg-0">
                <h6 className="text-primary">Join Our Team</h6>
                <h1 className="mb-4">Apply for a Job</h1>

                <form  action="#" method='POST'>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Your Name"
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Your Email"
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          name="resume"
                          placeholder="Attach Your Resume (PDF or Word)"
                        />
                        <label htmlFor="resume">Attach Your Resume (PDF or Word)</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Tell us why you want to join our team and your relevant experience"
                          name="message"
                          style={{ height: "100px" }}
                        ></textarea>
                        <label htmlFor="message">Cover Letter</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary rounded-pill py-3 px-5"
                        type="submit"
                      >
                        Submit Application
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Career;
