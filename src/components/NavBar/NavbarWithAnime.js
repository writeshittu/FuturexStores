import React, { useState } from "react";
import "./Navbar.css";
import Modals from "../custom-modal/customModal";

const NavbarWithAnime = () => {
  const [ismodal, setisOpen] = useState(false);

  const handleopenModal = () => {
    setisOpen(true);
  };
  return (
    <div>
      <nav className="nav-contain">
        <ul>
          <li className="item">
            <a href="/nav">home</a>
          </li>
          <li className="item">
            <a href="/nav">About Us</a>
          </li>
          <li className="item">
            <a href="/nav">Projects</a>
          </li>
          <li className="item">
            <a href="/nav">Contact</a>
          </li>
          <li className="item">
            <a href="/nav">Login</a>
          </li>
        </ul>
        <div className="menu">
          <button className="btn-menu"> Menu</button>
          <div className="dropdown-items">
            <a href="/nav">Project</a>
            <a href="/nav">Meet the team</a>
            <a href="/nav">Careers</a>
          </div>
        </div>
      </nav>
      <div className="button-wrapper">
        <button onClick={handleopenModal}>open Modal</button>
        <Modals Open={ismodal} onClose={() => setisOpen(false)}>
          <>
            <div className="card-wrapper">
              <div className="box">
                <div className="img-box">
                  <img
                    src="https://images.unsplash.com/photo-1548207800-8c16d068bf17?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="img card"
                  />
                </div>
                <div className="text-box">
                  <h4>Jane Doe</h4>
                  <h5>Designation </h5>
                  <p>
                    <i className="fa fa-facebook" />
                    <i className="fa fa-youtube" />
                    <i className="fa fa-twitter" />
                    <i className="fa fa-pinterest" />
                  </p>
                </div>
              </div>
            </div>
          </>
        </Modals>
      </div>
      <div className="other-modal">other content re ooo</div>
    </div>
  );
};

export default NavbarWithAnime;
