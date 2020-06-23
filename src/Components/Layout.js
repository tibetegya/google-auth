import React from "react";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="App">
      <h1>Hello</h1>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Layout;
