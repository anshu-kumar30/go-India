import React from 'react';
import "./contacticons.css";
 const ContactIcon = () =>{
     return(
         <div className="iconcont">
             <div className="iconbox">
                 <div className="iconss"><i className="map icon"></i></div>
                 <div className="details"><h3>INDIA</h3></div>
             </div>
             <div className="iconbox">
                 <div className="iconss"><i className="phone icon"></i></div>
                 <div className="details"><h3>+91 8791155263</h3></div>
             </div>
             <div className="iconbox">
                 <div className="iconss"><i className="mail icon"></i></div>
                 <div className="details"><h3>ak@gmail.com</h3></div>
             </div>
         </div>
     );
 };
 export default ContactIcon;