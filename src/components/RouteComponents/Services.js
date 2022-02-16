import React from "react";
import ser from "./images/tu.jpeg";
import Footer from "../Footer";
const Services =() =>{
    return(
        <div>
            <div className="imgcontainer">
                <img src={ser} alt=""/>
            </div>
            <div className="centeredd">
            Our Services
            </div>
           
            
            <Footer/>
        </div>
    );
};
export default Services;