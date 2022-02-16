import React from 'react';

class GoogleAuth extends React.Component {
    state={ isSignedIn:null };
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
               clientId: '719834029007-8hopsga4pdk298ina0mvv2fgghrd3job.apps.googleusercontent.com',
               scope :'email' 
            }).then(() =>{
                this.auth=window.gapi.auth2.getAuthInstance();
                this.auth.isSignedIn.listen(this.onAuthChange);
                this.setState({isSignedIn: this.auth.isSignedIn.get()})
            });
        });
    }
    onAuthChange=()=>{
        this.setState({isSignedIn: this.auth.isSignedIn.get()});
    };

    onSignIn = () =>{
        this.auth.signIn();
    };
    onSignOut = () =>{
        this.auth.signOut();
    };
    renderAuthButton(){
        if(this.state.isSigned===null){
            return null;
        }else if(this.state.isSignedIn){
            return(
                <div>
                    <button 
                    onClick={this.onSignOut}
                    className="ui red google button"
                    style={{marginTop:"5px"}}
                    >
                        <i className="google icon"/>
                        SignOut
                    </button>
                </div>
            );
        }else{
            return(
                <button 
                onClick={this.onSignIn}
                className="ui green google button"
                style={{marginTop:"5px"}}
                >
                    <i className="google icon"/>
                    SignIn with Google
                </button>
            );
        }
    }
    render() { 
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}
 
export default GoogleAuth;