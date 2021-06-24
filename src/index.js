import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

let authDomain;
let authClientID;

if (process.env.NODE_ENV !== "production") {
  authDomain = process.env.REACT_APP_DOMAIN;
  authClientID = process.env.REACT_APP_CLIENT_ID;
} else {
  authDomain = process.env.DOMAIN;
  authClientID = process.env.CLIENT_ID;
}

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={`${authDomain}`}
      clientId={`${authClientID}`}
      redirectUri={window.location.origin}
      cacheLocation='localstorage'>
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
