import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';


const Contact = () => {
  return (
    <div>
        <Navbar/>
    <div className="container-fluid bg-light overflow-hidden px-lg-0" >
    <div className="container contact px-lg-0">
        <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 contact-text py-5 wow fadeIn" data-wow-delay="0.5s">
                <div className="p-lg-5 ps-lg-0">
                    <h6 className="text-primary">Contact Us</h6>
                    <h1 className="mb-4">Feel Free To Contact Us</h1>
                    {/* <p className="mb-4">The contact form is currently inactive. Get a functional and working contact
                        form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and
                        you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p> */}
                    <form action="https://formspree.io/f/xjvqjoad" method='POST'>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text"
                                     className="form-control" 
                                     name="name" 
                                     placeholder="Your Name"
                                     required/>
                                    <label for="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="email" 
                                    className="form-control" 
                                    name="email" placeholder="Your Email"/>
                                    <label for="email">Your Email</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" 
                                    className="form-control"
                                    name="subject"
                                    placeholder="Subject"/>
                                    <label for="subject">Subject</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control"
                                     placeholder="Leave a message here" 
                                     name="message"
                                        style={{height: "100px"}}></textarea>
                                    <label for="message">Message</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Send
                                    Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Add Nashik Location here */}

            <div className="col-lg-6 pe-lg-0" style={{minHeight: "400px"}}>
                <div className="position-relative h-100">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.571092549888!2d73.77220750919398!3d19.
                984532081338667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb13a5c271d3%3A0xa41d5f0083e7cc2e!
                2sBusiness%20center%20-%20ROONGTA!5e0!3m2!1sen!2sin!4v1697267911972!5m2!1sen!2sin" 
                width="100%" height="500" style={{border:0}} allowFullScreen="" loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
</div>
<Footer/>
</div>
  )
}

export default Contact
