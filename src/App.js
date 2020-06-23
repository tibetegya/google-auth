import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Routes/Login";
import Home from "./Routes/Home";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Router>
  );
}
