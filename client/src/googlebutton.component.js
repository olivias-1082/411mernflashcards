import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";

const CLIENT_ID =
  '135407762997-3bssb7baraqs93ksccr3k3ue2rbuecl9.apps.googleusercontent.com';

const App = (props) => {
    let history = useHistory();
    // Redirects user after authentication 
    const responseGoogleSuccess = () => {
    
        history.push('http://localhost:3000/');
    }
};

class GoogleLoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      userInfo: {
        name: "",
        emailId: "",
      },
    };
  }

  // Success Handler
  responseGoogleSuccess = (response) => {
    console.log();
    let userInfo = {
      name: response.profileObj.name,
      emailId: response.profileObj.email,
    };
    this.setState({ userInfo, isLoggedIn: true });
  };

  // Error Handler
  responseGoogleError = (response) => {
    console.log(response);
  };

  // Logout Session and Update State
  logout = (response) => {
    console.log(response);
    let userInfo = {
      name: "",
      emailId: "",
    };
    this.setState({ userInfo, isLoggedIn: false });
  };

  render() {
    return (
      <div className="row mt-15">
        <div className="col-md-15">
          {this.state.isLoggedIn ? (
            <div>

              <GoogleLogout
                clientId={CLIENT_ID}
                buttonText={"Logout"}
                onLogoutSuccess={this.logout}
              ></GoogleLogout>
            </div>
          ) : (
            <GoogleLogin
              clientId={CLIENT_ID}
              buttonText="Sign In with Google"
              onSuccess={this.responseGoogleSuccess}
              uxMode='redirect'
              redirectUri='http://localhost:3000/'
              onFailure={this.responseGoogleError}
              isSignedIn={true}
              cookiePolicy={"single_host_origin"}
            />
          )}
        </div>
      </div>
    );
  }
}
export default GoogleLoginComponent;
