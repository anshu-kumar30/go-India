import React from "react";
import dest from "./images/destination.jpg";
import ImageCard from "./components/ImageCard";
import "./destination.css";
import Footer from "../Footer";




const Destination =() =>{
    

    return(
        <div>
            <div className="imgcontainer">
                <img src={dest} alt="destinations Images"/>
            </div>
            <div className="centeredd">
                Destination
            </div>
            <ImageCard/>
            <ImageCard/>
            <ImageCard />
            <ImageCard/>
            <Footer/>
        </div>
    );
};
export default Destination;