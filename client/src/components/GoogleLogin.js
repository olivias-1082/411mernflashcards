import React from 'react';
import GoogleLogin from 'react-google-login';
const login = async (code) => {
  return fetch('/api/auth/google', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res);
    }
  });
};
export default (props) => {
  const responseGoogle = async (authResult) => {
    try {
      if (authResult['code']) {
        const result = await login(authResult['code']);
        console.log(authResult);
        props.login(result);
      } else {
        throw new Error(authResult);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="login-page">
      <GoogleLogin
        // use your client id here
        clientId={'952418428484-gr5ce62un9enaic3asvihjc3ssv79kmf.apps.googleusercontent.com'}
        buttonText="Login with google"
        responseType="code"
        redirectUri="postmessage"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};