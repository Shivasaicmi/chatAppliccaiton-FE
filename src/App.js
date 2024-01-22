import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginPage from "./authPages/LoginPage/LoginPage";
import RegisterPage from "./authPages/RegisterPage/RegisterPage";
import Dashboard from "./Dashboard/Dashboard";
import AlertNotification from "./shared/components/AlertNotification";

import "./App.css";
import PrivateRoute from "./shared/components/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/dashboard">
          <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          </Route>
          <Route path="/">
            <PrivateRoute>
              <Redirect to="/dashboard" />
            </PrivateRoute>
          </Route>
        </Switch>
      </Router>
      <AlertNotification />
    </>
  );
}

export default App;