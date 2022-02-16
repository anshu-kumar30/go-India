import React from "react";
import {  Link } from "react-router-dom";
import GoogleAuth from "./Auth/GoogleAuth";



const Header = () =>{
    
    return(
        
        <div className="ui secondary pointing menu" >
            <Link to="/" className="item" style={{textWeight:"Bold" , color:"red", fontFamily:"emoji"}}>
                <h3>GO-INDIA</h3>
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    Home
                </Link>
                <Link to="/Destination" className="item">
                    Destination
                </Link>
                <Link to="/Services" className="item">
                    Services
                </Link>
                <Link to="/About" className="item">
                    About
                </Link>
                <Link to="/Gallery" className="item">
                    Gallery
                </Link>
                
            </div>
            <GoogleAuth/>
            {/* <button
            className="ui red button"
            style={{height:"35px" , marginTop:"7px"}}
            
            >
             Login/Signup   
            </button> */}
            
        </div>
    );
};
export default Header;