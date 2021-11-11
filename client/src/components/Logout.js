import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '135407762997-3bssb7baraqs93ksccr3k3ue2rbuecl9.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;