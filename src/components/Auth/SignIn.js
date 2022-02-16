import React from "react";
import "../Auth/Css/Signin.css";
import {Link} from "react-router-dom";
// import GoogleAuth from "./GoogleAuth";


class SignIn extends React.Component{
    render(){
        return(
            <div className="container">
                <h3 className="login_heading">Fill your details</h3>
                <form className="ui form">
                    <div className="field">
                        <label className="label" >Username or email </label>
                        <input type="text" required/>
                        <div className="field">
                            <label className="label" >password </label>
                            <input type="password" required/>
                        </div>
                     </div>

                    <div className="para" style={{marginBottom:"3%"}} >
                         <p>If you dont have account ? <Link to="/SignUp">click here!!</Link></p>
                    </div>
                    <div className="btn">
                        <button className="ui green button" style={{width:"100%",}}>SignIn</button>
                        <button 
                        className="ui red button " 
                        style={{width:"100%" , marginTop:"1%"}}
                        >
                            <i className="google icon"/> 
                            Sign in with google
                        </button>
                    </div>
                    <div className="para" style={{marginBottom:"3%"}} >
                        <Link to="/forgotPassword" >forgot password?</Link>
                    </div>
                </form>
            </div>
                

            
        );
    }
}
export default SignIn;