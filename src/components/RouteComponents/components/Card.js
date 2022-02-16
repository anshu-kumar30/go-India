import React from 'react';
import "./card.css"
 const Card = (props) =>{
    
     return(
        <div className="cardcontainer">
        <div className="row">
            <div className="column">
                <div className="card">
                    <h3>{props.h1}</h3>
                    <p>{props.p1}</p>
                </div>
            </div>
            <div className="column">
                <div 
                style={{background:"linear-gradient(#FFC107,#E91E63)"}}
                className="card card2">
                    <h3>{props.h2}</h3>
                    <p>{props.p2}</p>
                </div>
            </div>
            <div className="column">
                <div className="card card2">
                    <h3 >{props.h3}</h3>
                    <p>{props.p3}</p>
                </div>
            </div>
            
        </div>
    </div>
     );
 };
 export default Card;