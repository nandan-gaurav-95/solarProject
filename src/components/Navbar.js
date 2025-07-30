import React from 'react'
import logo from './assets/logo.png';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
         {/* <div class="container-fluid bg-dark p-0">
        <div class="row gx-0 d-none d-lg-flex">
            <div class="col-lg-7 px-5 text-start">
                <div class="h-100 d-inline-flex align-items-center me-4">
                    <small class="fa fa-map-marker-alt text-primary me-2"></small>
                    <small>1005, Archandip pvt ltd, Business Center,Govind Nagar,Nashik</small>
                </div>
                <div class="h-100 d-inline-flex align-items-center">
                    <small class="far fa-clock text-primary me-2"></small>
                    <small>Mon - Sat : 10.00 AM - 08.00 PM</small>
                </div>
            </div>
            <div class="col-lg-5 px-5 text-end">
                <div class="h-100 d-inline-flex align-items-center me-4">
                    <small class="fa fa-phone-alt text-primary me-2"></small>
                    <small>+919657089541</small>
                </div>
                <div class="h-100 d-inline-flex align-items-center mx-n2">
                    <a class="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href=""><i
                            class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href=""><i
                            class="fab fa-twitter"></i></a>
                    <a class="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href=""><i
                            class="fab fa-linkedin-in"></i></a>
                    <a class="btn btn-square btn-link rounded-0" href=""><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div> */}
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 shadow-sm rounded">
        
        {/* <a href="index.html" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
            <h2 className="m-0 text-primary">Solartec</h2>
        </a> */}
        <Link to="/solarproject" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
        <img
            src={logo}
            height="70"
            className='mt-2'
            alt="ARCHANADIP"
          />
        </Link>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
            {/* <NavLink to="/meditech" className="nav-item nav-link" activeClassName="active-link">Meditech</NavLink> */}
            <NavLink to="/solarproject" className="nav-item nav-link" activeClassName="active-link">Home</NavLink>
            <NavLink to="/about" className="nav-item nav-link" activeClassName="active-link">About</NavLink>
            <NavLink to="/service" className="nav-item nav-link" activeClassName="active-link">Services</NavLink>
            <NavLink to="/project" className="nav-item nav-link" activeClassName="active-link">Projects</NavLink>
            <NavLink to="/career" className="nav-item nav-link" activeClassName="active-link">Career</NavLink>
            <NavLink to="/contact" className="nav-item nav-link" activeClassName="active-link">Contact US</NavLink>
                {/* <Link to="/feature" className="nav-item nav-link">Features</Link>  */}

               {/* <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu bg-light m-0">
                        <a href="feature.html" className="dropdown-item">Feature</a>
                        <a href="quote.html" className="dropdown-item">Free Quote</a>
                        <a href="team.html" className="dropdown-item">Our Team</a>
                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                        <a href="404.html" className="dropdown-item">404 Page</a>
                    </div>
                </div>  */}
             
            </div>
            <NavLink to="/meditech" className="btn btn-primary rounded-0 py-4 px-lg-5 d-lg-block">Meditech Products<i
                    className="fa fa-arrow-right ms-3"></i></NavLink>
        </div>
    </nav>
    </div>
  )
}
