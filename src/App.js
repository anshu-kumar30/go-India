import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//imports components

import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";
import Header from "./components/Header";
import Home from "./components/RouteComponents/Home";
import Destination from "./components/RouteComponents/Destination";
import Services from "./components/RouteComponents/Services";
import About from "./components/RouteComponents/About";
import Gallery from "./components/RouteComponents/Gallery";
import forgotPassword from "./components/Auth/forgotPassword";



class App extends React.Component{
    render(){
        return(
            <div>
                
                <BrowserRouter>
                
                  <div>
                  <Header/>
                  
                      
                      <Route path="/" exact component={Home}/>
                      <Route path="/Destination" exact component={Destination}/>
                      <Route path="/Services" exact component={Services}/>
                      <Route path="/About" exact component={About}/>
                      <Route path="/SignUp"exact component={SignUp} />
                      <Route path="/SignIn" exact component={SignIn}/>
                      <Route path="/Gallery" exact component={Gallery}/>
                      <Route path="/forgotPassword" exact component={forgotPassword}/>
                  </div>
                </BrowserRouter>
            </div>
        );

    }   
}

export default App;