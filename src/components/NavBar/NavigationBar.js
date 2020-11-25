import React, { Component } from "react";
import { Link } from "react-router-dom";
import fxlogo from "../../logo/fxlogo.png";
import "./Navbar.css";

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { showNav: false };
  }

  toggleNav = () => {
    this.setState({
      showNav: !this.state.showNav,
    });
  };

  render() {
    const { showNav } = this.state;
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

          <div
            className={(showNav ? "show" : "") + " collapse navbar-collapse"}
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  {this.props.isActive ? "Log out" : "Login"}
                </Link>
              </li>
              <li className="nav-item">
                {!this.props.isActive && (
                  <Link className="nav-link" to="/sign-up">
                    Sign up
                  </Link>
                )}
              </li>
            </ul>
          </div>
          <span className="nav-item mr-auto" style={{ position: "relative" }}>
            {!this.props.isActive && (
              <Link className="nav-link" to="/cart">
                <i className="fas fa-luggage-cart fa-2x"></i>
              </Link>
            )}
            <p
              className="badge badge-danger"
              style={{ position: "absolute", top: "-2px", right: "35PX" }}
            >
              54o5
            </p>
          </span>
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleNav}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    );
  }
}

export default NavBar;
