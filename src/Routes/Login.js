import React, { useState, useEffect, useRef } from "react";
// import { useRouteMatch, useParams } from "react-router-dom";
// import { Helmet } from "react-helmet";
import styled from "styled-components";

const Button = styled.button`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: url(https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-512.png);
    background-size: 50px 50px;
    background
  }
`;

import GoogleLogin from "react-google-login";

const Login = () => {
  const responseGoogle = response => {
    console.log(response);
  };
  // const loginBtnRef = useRef(null);
  // useEffect(() => {
  //   const elm = loginBtnRef.current;
  //   console.log(window.gapi);
  //   let auth2;
  //   window.gapi.load("auth2", function() {
  //     // Retrieve the singleton for the GoogleAuth library and set up the client.
  //     auth2 = window.gapi.auth2.init({
  //       client_id:
  //         "634531522994-5hllkv49nscpm85ffrpp7apn9rg9ilcf.apps.googleusercontent.com",
  //       cookiepolicy: "single_host_origin"
  //       // Request scopes in addition to 'profile' and 'email'
  //       //scope: 'additional_scope'
  //     });
  //     auth2.attachClickHandler(
  //       elm,
  //       {},
  //       function(googleUser) {
  //         console.log(">>>>", googleUser.getBasicProfile());
  //         // document.getElementById("name").innerText =
  //         //   "Signed in: " + googleUser.getBasicProfile().getName();
  //       },
  //       function(error) {
  //         alert(JSON.stringify(error, undefined, 2));
  //       }
  //     );
  //   });
  // }, []);
  // const loginClick = () => {
  //   console.log(">>>>");
  // };

  return (
    <div>
      <GoogleLogin
        clientId="634531522994-5hllkv49nscpm85ffrpp7apn9rg9ilcf.apps.googleusercontent.com"
        render={renderProps => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          />
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      {/* <button ref={loginBtnRef}>login</button>
      <span id="name" /> */}
    </div>
  );
};

export default Login;
