import React from "react";
import "../Auth/Css/SignUp.css"
import {Link} from "react-router-dom";

class SignUp extends React.Component{
    render(){
        return(
            <div className="container">
                <h3 className="login_heading">Fill your details</h3>
                <form className="ui form">
                    <div className="field">
                        <label className="label" >Full Name</label>
                        <input type="text" required/>
                    </div>
                    <div className="field">
                        <label className="label" >Email</label>
                        <input type="password" required/>
                    </div>
                    <div className="field">
                        <label className="label" >password (at least 8 characters) </label>
                        <input type="password" required/>
                    </div>
                    <div className="field">
                        <label className="label" >Confirm password </label>
                        <input type="password" required/>
                    </div>
                    <div className="item" style={{marginBottom:"3%"}} >
                         <p>If you have account ? <Link to="/SignIn">click here!!</Link></p>
                    </div>
                    <div className="btn">
                        <button className="ui green button" style={{width:"100%",}}>SignUp</button>
                        <button className="ui red button " style={{width:"100%" , marginTop:"1%"}}><i className="google icon"/> Sign in with google</button>

                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;