import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import * as serviceWorker from "./serviceWorker";
import keycloak from "./keycloak";
import { ReactKeycloakProvider } from "@react-keycloak/web";

ReactDOM.render(

    
    <Provider store={store}>
      <ReactKeycloakProvider authClient={keycloak} >
      <App />
      </ReactKeycloakProvider>
    </Provider>
    
,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
