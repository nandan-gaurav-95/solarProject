import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import Feature from './Feature';
import product1 from './assets/archana_products.jpg';

const Service = () => {
  return (
    <div>
        <Navbar/>
    <div className="container-xxl py-5">
    <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
            <h6 className="text-primary">Our Services</h6>
            <h1 className="mb-4">We Are Pioneers In The World Of Solar Energy</h1>
        </div>
        <div className="row g-4">
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item rounded overflow-hidden">
                    <img className="img-fluid" src="img/img-600x400-1.jpg" alt=""/>
                    <div className="position-relative p-4 pt-0">
                        <div className="service-icon">
                            <i className="fa fa-solar-panel fa-3x"></i>
                        </div>
                        <h4 className="mb-3">Solar Panels</h4>
                        <p>Our high-quality solar panels are designed to capture maximum sunlight and convert it into clean energy. With cutting-edge technology, we ensure the highest efficiency and reliability for your energy needs.</p>
                        <button className="small fw-medium">Read More<i className="fa fa-arrow-right ms-2"></i></button>
                    </div>
                </div>
            </div>
            {/* <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item rounded overflow-hidden">
                    <img className="img-fluid" src="img/img-600x400-2.jpg" alt=""/>
                    <div className="position-relative p-4 pt-0">
                        <div className="service-icon">
                            <i className="fa fa-wind fa-3x"></i>
                        </div>
                        <h4 className="mb-3">Wind Turbines</h4>
                        <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                        <button className="small fw-medium">Read More<i className="fa fa-arrow-right ms-2"></i></button>
                    </div>
                </div>
            </div> */}
            {/* <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item rounded overflow-hidden">
                    <img className="img-fluid" src="img/img-600x400-3.jpg" alt=""/>
                    <div className="position-relative p-4 pt-0">
                        <div className="service-icon">
                            <i className="fa fa-lightbulb fa-3x"></i>
                        </div>
                        <h4 className="mb-3">Hydropower Plants</h4>
                        <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                        <button className="small fw-medium">Read More<i className="fa fa-arrow-right ms-2"></i></button>
                    </div>
                </div>
            </div> */}
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item rounded overflow-hidden">
                    <img className="img-fluid" src="img/img-600x400-4.jpg" alt=""/>
                    <div className="position-relative p-4 pt-0">
                        <div className="service-icon">
                            <i className="fa fa-solar-panel fa-3x"></i>
                        </div>
                        <h4 className="mb-3">Solar Panels</h4>
                        <p>Experience the power of renewable energy with our state-of-the-art solar panel solutions. We are committed to sustainability and provide eco-friendly energy solutions that benefit both your wallet and the environment.</p>
                        <button className="small fw-medium">Read More<i className="fa fa-arrow-right ms-2"></i></button>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item rounded overflow-hidden">
                    {/* <img className="img-fluid" src="img/img-600x400-5.jpg" alt=""/> */}
                    <img  className="img-fluid"  src={product1}    alt="" style={{width:"100%"}} />
                    <div className="position-relative p-4 pt-0">
                        <div className="service-icon">
                            <i className="fa fa-solar-panel fa-3x"></i>
                        </div>
                        <h4 className="mb-3">Solar Panel</h4>
                        <p> Our commitment to innovation and environmental responsibility means you get the most out of the sun's energy, reducing your carbon footprint while saving on energy costs.</p>
                        <button className="small fw-medium">Read More<i className="fa fa-arrow-right ms-2"></i></button>
                    </div>
                </div>
            </div>
            {/* <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item rounded overflow-hidden">
                    <img className="img-fluid" src="img/img-600x400-6.jpg" alt=""/>
                    <div className="position-relative p-4 pt-0">
                        <div className="service-icon">
                            <i className="fa fa-lightbulb fa-3x"></i>
                        </div>
                        <h4 className="mb-3">Hydropower Plants</h4>
                        <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                        <button className="small fw-medium">Read More<i className="fa fa-arrow-right ms-2"></i></button>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
    <Feature/>
</div>
<Footer/>
</div>
  )
}

export default Service
