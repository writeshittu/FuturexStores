import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fxlogo from "../../logo/fxlogo.png";
import ProductContext from "../../Context/ProductItems/ProductContext";
import "./Navbar.css";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [totalQty, setTotalQty] = useState("0");

  const productContext = useContext(ProductContext);

  const { cart } = productContext;

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={fxlogo}
            alt="logo"
            width="200px"
            className="img-fluid d-none d-lg-block"
          />
        </Link>

        <div className={(showNav ? "show" : "") + " collapse navbar-collapse"}>
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item">
              <Link className="nav-link" to="/">
                {isActive ? "Log out" : "Login"}
              </Link>
            </li>
            <li className="nav-item">
              {isActive && (
                <Link className="nav-link" to="/sign-up">
                  Sign up
                </Link>
              )}
            </li> */}
          </ul>
        </div>
        <span className="nav-item mr-auto" style={{ position: "relative" }}>
          <Link className="nav-link" to="/cart">
            <i className="fas fa-shopping-cart fa-2x"></i>

            {cart.length && (
              <p
                className="badge badge-danger"
                style={{ position: "absolute", top: "-2px", right: "35PX" }}
              >
                {cart.length}
              </p>
            )}
          </Link>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => toggleNav()}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
