import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import Feature from "./Feature";
import ImageCarousel from "./ImageCarousel";
import Products from "./Products";
import AboutHome from "./AboutHome";

const Home = () =>{
    return(
        <div>
            <Navbar/>
           <ImageCarousel/>
            <Feature/>
            <Products/>
            <AboutHome/>
            <Footer/>
        </div>
    );
}
export default Home;