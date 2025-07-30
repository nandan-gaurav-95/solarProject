import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="container-fluid bg-dark text-body footer  pt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Address</h5>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>1005, Archandip pvt ltd, Business Center, Govind Nagar, Nashik </p>
            {/* <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+917030000513</p> */}
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+917843069930</p>
            {/* <p className="mb-2"><i className="fa fa-envelope me-3"></i>archanadip2023@gmail.com</p> */}
            <p className="mb-2"><i className="fa fa-envelope me-3"></i>gn281195@gmail.com</p>

            <div className="d-flex pt-2">
              <a className="btn btn-square btn-outline-light btn-social" target="_blank" href={`https://wa.me/7843069930/?text=${encodeURIComponent('Hello, I have a question.')}`}
><i
                className="fab fa-whatsapp"></i></a>
              <a className="btn btn-square btn-outline-light btn-social" href="https://facebook.com"><i
                className="fab fa-facebook-f"></i></a>
              <a className="btn btn-square btn-outline-light btn-social" href="https://youtube.com"><i
                className="fab fa-youtube"></i></a>
              <a className="btn btn-square btn-outline-light btn-social" href="https://linkedin.com"><i
                className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
  <h5 className="text-white mb-4">Quick Links</h5>
  <button className="btn btn-link"><Link to="/about">About Us</Link></button>
  <button className="btn btn-link"><Link to="/contact">Contact Us</Link></button>
  <button className="btn btn-link"><Link to="/service">Our Services</Link></button>
  <button className="btn btn-link"><Link to="/contact">Terms & Condition</Link></button>
  {/* <button className="btn btn-link"><Link to="/contact">Support</Link></button> */}
 </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Project Gallery</h5>
            <div className="row g-2">
              <div className="col-4">
                <img className="img-fluid rounded" src="img/gallery-1.jpg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded" src="img/gallery-2.jpg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded" src="img/gallery-3.jpg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded" src="img/gallery-4.jpg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded" src="img/gallery-5.jpg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded" src="img/gallery-6.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            {/* <h5 className="text-white mb-4">Newsletter</h5>
            <p>Lorem lipsum 24</p>
            <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
              <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
              <button type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
            </div> */}
            <div className="copyright mt-5 text-center">
              <p className="copyright-text"> &copy; 2023 <br/>Archanadip <br/> Solar Hub & Meditech Hub Pvt Ltd.<br/> All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
}
