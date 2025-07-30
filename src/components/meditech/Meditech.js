import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
 

import bed_side from '../assets/meditake/BED-SIDE-LOCKER.jpg';
import cath_lab from '../assets/meditake/CATH LAB OF GE COMPANY.jpeg';
import ct_scan from '../assets/meditake/CT SCAN OF GE COMPANY.jpg';
import icu_bed from '../assets/meditake/ICU Bed.jpg';
import mri_machine from '../assets/meditake/MRI MACHINE OF GE COMPANY.jpg';
import x_ray from '../assets/meditake/XRAY 100MA OF ALLENGER COMPANY.jpeg';
import hospital_ward from '../assets/meditake/hospital-ward-plane-ward.jpg';
import ot_light_double_dom from '../assets/meditake/OT LIGHT DOUBLE DOM.jpg';
import ot_light_single_dom from '../assets/meditake/OT SINGLE DOM.webp';
import ot_table from '../assets/meditake/OT TABLE.webp';
import semi_flower_bed from '../assets/meditake/semi-flower-bed-deluxe-.jpg';
import sonography from '../assets/meditake/SONOGHRAPHY MACHINE OF GE COMPANY.webp';
import trolly from '../assets/meditake/trolly hospital.jpg';

const Meditech = () => {
  return (
    <div>
    <Navbar/>
<div className="container-xxl py-5">
<div className="container">
    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
        <h6 className="text-primary">Medical Equipments</h6>
        <h1 className="mb-4">MediTech Product</h1>
    </div>
    <div className="row g-4">
        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded overflow-hidden">
                <img className="img-fluid" src={cath_lab}    alt="" style={{width:"100%"}} />
                <div className="position-relative p-4 pt-0">
                    <div className="service-icon">
                        <i className="fa fa-medkit fa-3x"></i>
                    </div>
                    <h4 className="mb-3">CATH LAB</h4>
                    <p>Add Equipment details for CATH LAB </p>
                    {/* <button className="small fw-medium">Read More<i className="fa fa-arrow-right ms-2"></i></button> */}
                </div>
            </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item rounded overflow-hidden" style={{ height: '100%', position: 'relative' }}>
                {/* <img className="img-fluid" src="img/img-600x400-2.jpg" alt=""/> */}
                <img className="img-fluid" src={ct_scan}    alt="" />
                <div className="position-absolute bottom-0 start-0 p-4 pt-0 w-100">
                    <div className="service-icon text-center">
                        <i className="fa fa-medkit fa-3x"></i>
                    </div>
                    <h4 className="mb-3">CT SCAN</h4>
                    <p>Add Equipment details for CT SCAN</p>
                    {/* <button className="small fw-medium">Read More<i className="fa fa-arrow-right ms-2"></i></button> */}
                </div>
            </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item rounded overflow-hidden">
                {/* <img className="img-fluid" src="img/img-600x400-3.jpg" alt=""/> */}
                <img  className="img-fluid"  src={bed_side}    alt="" style={{width:"100%"}} />
                <div className="position-relative p-4 pt-0">
                    <div className="service-icon">
                        <i className="fa fa-medkit fa-3x"></i>
                    </div>
                    <h4 className="mb-3">BED SIDE LOCKER</h4>
                    <p>Add Equipment details for BED SIDE LOCKER</p>
                    {/* <button className="small fw-medium">Read More<i className="fa fa-arrow-right ms-2"></i></button> */}
                </div>
            </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded overflow-hidden" style={{ height: '100%', position: 'relative' }}>
                <img className="img-fluid" src={icu_bed}    alt=""  />
                <div className="position-absolute bottom-0 start-0 p-4 pt-0 w-100">
                    <div className="service-icon text-center">
                        <i className="fa fa-bed fa-3x"></i>
                    </div>
                    <h4 className="mb-3">ICU BED</h4>
                    <p>Add Equipment details for ICU BED</p>
                    {/* <button className="small fw-medium">Read More<i className="fa fa-arrow-right ms-2"></i></button> */}
                </div>
            </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item rounded overflow-hidden">
                {/* <img className="img-fluid" src="img/img-600x400-5.jpg" alt=""/> */}
                <img  className="img-fluid"  src={x_ray}    alt="" style={{width:"100%"}} />
                <div className="position-relative p-4 pt-0">
                    <div className="service-icon">
                        <i className="fas fa-x-ray fa-3x"></i>
                    </div>
                    <h4 className="mb-3">X-RAY</h4>
                    <p>Add equipment details for X-RAY</p>
                    {/* <button className="small fw-medium">Read More<i className="fa fa-arrow-right ms-2"></i></button> */}
                </div>
            </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item rounded overflow-hidden">
                {/* <img className="img-fluid" src="img/img-600x400-6.jpg" alt=""/> */}
                <img  className="img-fluid"  src={mri_machine}    alt="" style={{width:"100%"}} />
                <div className="position-relative p-4 pt-0">
                    <div className="service-icon">
                        <i className="fa fa-medkit fa-3x"></i>
                    </div>
                    <h4 className="mb-3">MRI MACHINE</h4>
                    <p>Add Equipment details for MRI MACHINE</p>
                    {/* <button className="small fw-medium">Read More<i className="fa fa-arrow-right ms-2"></i></button> */}
                </div>
            </div>
        </div>
                           <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="service-item rounded overflow-hidden" style={{ height: '100%', position: 'relative' }}>
                                    <img className="img-fluid" src={hospital_ward} alt="" />
                                    <div className="position-absolute bottom-0 start-0 p-4 pt-0 w-100">
                                        <div className="service-icon text-center">
                                            <i className="fa fa-bed fa-3x"></i>
                                        </div>
                                        <h4 className="mb-3 text-center">Hospital Ward</h4>
                                        <p className="text-center">Add Equipment details for Hospital Ward Bed</p>
                                    </div>
                                </div>
                           </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.9s">
                            <div className="service-item rounded overflow-hidden" style={{ height: '100%', position: 'relative' }}>
                                <img className="img-fluid" src={ot_light_double_dom} alt=""/>
                                <div className="position-absolute bottom-0 start-0 p-4 pt-0 w-100">
                                    <div className="service-icon text-center">
                                        <i className="fa fa-lightbulb fa-3x"></i>
                                    </div>
                                    <h4 className="mb-3">OT Light Double Dome</h4>
                                    <p>Add Equipment details for OT Light Double Dome</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="1.1s">
                            <div className="service-item rounded overflow-hidden">
                                <img className="img-fluid" src={ot_light_single_dom} alt="" style={{ width: "100%" }} />
                                <div className="position-relative p-4 pt-0">
                                    <div className="service-icon">
                                        <i className="fa fa-lightbulb fa-3x"></i>
                                    </div>
                                    <h4 className="mb-3">OT Light Single Dome</h4>
                                    <p>Add Equipment details for OT Light Single Dome</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="service-item rounded overflow-hidden">
                                <img className="img-fluid" src={ot_table} alt="" style={{ width: "100%" }} />
                                <div className="position-relative p-4 pt-0">
                                    <div className="service-icon">
                                        <i className="fa fa-medkit fa-3x"></i>
                                    </div>
                                    <h4 className="mb-3">OT Table</h4>
                                    <p>Add Equipment details for OT Table</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.9s">
                            <div className="service-item rounded overflow-hidden">
                                <img className="img-fluid" src={semi_flower_bed} alt="" style={{ width: "100%" }} />
                                <div className="position-relative p-4 pt-0">
                                    <div className="service-icon">
                                        <i className="fa fa-bed fa-3x"></i>
                                    </div>
                                    <h4 className="mb-3">Semi-Flower Bed Deluxe</h4>
                                    <p>Add Equipment details for Semi-Flower Bed</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="1.1s">
                                <div className="service-item rounded overflow-hidden" style={{ height: '100%', position: 'relative' }}>
                                    <img className="img-fluid" src={sonography} alt="" />
                                    <div className="position-absolute bottom-0 start-0 p-4 pt-0 w-100">
                                        <div className="service-icon text-center">
                                            <i className="fa fa-medkit fa-3x"></i>
                                        </div>
                                        <h4 className="mb-3 text-center">Sonography Machine</h4>
                                        <p className="text-center">Add Equipment details for Sonography Machine</p>
                                    </div>
                                </div>
                            </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="service-item rounded overflow-hidden">
                                <img className="img-fluid" src={trolly} alt="" style={{ width: "100%" }} />
                                <div className="position-relative p-4 pt-0">
                                    <div className="service-icon">
                                        <i className="fa fa-ambulance fa-3x"></i>
                                    </div>
                                    <h4 className="mb-3">Trolly</h4>
                                    <p>Add Equipment details for Trolly</p>
                                </div>
                            </div>
                        </div>
                        
    </div>
</div>
{/* <Feature/> */}
</div>
<Footer/>
</div>
  )
}

export default Meditech
