import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image1 from "./assets/archanadip1.jpg";
import Image2 from "./assets/archanadip2.jpg";
import Image3 from "./assets/certificate.jpeg";


const ImageCarousel = () => {

  const carouselSettings = {
    autoPlay: true, // Enable auto-play
    infiniteLoop: true,
    showThumbs: false,
    transitionEffect: "fade",
    stopOnHover: true, // Set to false to allow one-direction sliding
    interval: 2000, // Set the sliding time to 3 seconds (3000 milliseconds)
  };
  
  return (
    <Carousel {...carouselSettings} >
      <div >
        <img className='w-70 h-20 d-inline-block' src={Image1} alt="Image 1" />
      </div>
      <div>
        <img className='w-70 h-20 d-inline-block' src={Image2} alt="Image 2" />
      </div>
      <div>
        <img className='w-85 h-35 d-inline-block' src={Image3} alt="Image 2" />
      </div>
     
    </Carousel>
  );
};

export default ImageCarousel;