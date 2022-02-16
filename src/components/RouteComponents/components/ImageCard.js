import React from 'react';
import "./imagecard.css"

//import images
import jammu from "../images/jammu.jpg";
import goa from "../images/goa.jpeg";
import kashmir from "../images/kas.jpg";

const ImageCard = (props) =>{
    return(
        <div className="maincontainer">
        <div className='cardcont'>
            <img src={goa} alt='img'/>
            <div className="txtcont">
                <h4>GOA</h4>
                <p>A</p>
            </div>
        </div>
        <div className='cardcont'>
            <img src={kashmir} alt='img'/>
            <div className="txtcont">
                <h4>KASHMIR</h4>
                <p>B</p>
            </div>
        </div>
        <div className='cardcont'>
            <img src={jammu} alt='img'/>
            <div className="txtcont">
                <h4>JAMMU</h4>
                <p>C</p>
            </div>
        </div>
        </div>
        
    );
};
export default ImageCard;