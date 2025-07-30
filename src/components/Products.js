import React from 'react'
import Solartplate from "./assets/solarplate.jpg";
const Products = () => {
  return (
        <div className="container-fluid p-0  ">
        <div className="header-carousel position-relative">
            <div className="owl-carousel-item position-relative">
            <img className="img-fluid w-100" style={{filter: 'brightness(0.2)'}} src={Solartplate}  alt=""/>
                <div className="owl-carousel-inner" style={{display:'block'}}>
                <h1 className="mt-5 text-white text-center">Solar Products</h1>
                
                    <div className="container">
                        <div className="row justify-content-start mt-5">
                            <div className="col-10 col-lg-4 ">           
                                <p className="fs-5 fw-medium text-white mb-4 pb-3">132 Cell 610-650 Wp PRIDE Series</p>
                                <a href="#" className="btn btn-primary rounded-pill py-3 px-5">Read
                                    More</a>
                            </div>
                            <div className="col-10 col-lg-4 ">
                                <p className="fs-5 fw-medium text-white mb-4 pb-3">144 Cell 520-545 Wp SHINE Series</p> 
                                <a href="#" className="btn btn-primary rounded-pill py-3 px-5">Read
                                    More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>

  )
}

export default Products;
