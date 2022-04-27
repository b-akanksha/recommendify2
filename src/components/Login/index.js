import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div>
      <h1 className="app-title">Recommendify</h1>
      <p className="app-title app-subtitle">Music Recommendation tool</p>
      <div className="app-content-div">
        <div>
          Hey! Do you want to listen to new music based on your favourite
          artist, favourite genres and favourite tracks? This tool is for you.{" "}
          <div>Enjoy!</div>
        </div>
      </div>
      <a
        className="button login-button"
        href={`${process.env.REACT_APP_AUTH_ENDPOINT}?client_id=${
          process.env.REACT_APP_CLIENT_ID
        }&redirect_uri=${
          process.env.NODE_ENV === "development"
            ? process.env.REACT_APP_LOCAL_REDIRECT_URI
            : process.env.REACT_APP_PROD_REDIRECT_URI
        }&response_type=${process.env.REACT_APP_RESPONSE_TYPE}`}
      >
        Login to Spotify
      </a>
    </div>
  );
};

export default Login;
