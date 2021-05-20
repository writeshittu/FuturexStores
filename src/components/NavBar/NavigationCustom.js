import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const NavigationCustom = () => {
  return (
    <nav>
      <div className="logggo">Navbar</div>
      <div className="menu-icons">
        <i className={clicked ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className="nav-itemss">
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/">contact</Link>
        </li>
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/">project</Link>
        </li>
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationCustom;
