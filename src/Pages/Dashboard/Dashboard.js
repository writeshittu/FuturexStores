import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./board.css";
import ImageSlider from "./ImageSlider";
import Modals from "../../components/custom-modal/customModal";

const Dashboard = () => {
  const [minisidebar, setminiSidebar] = useState(false);
  const [ismodal, setisOpen] = useState(false);
  const handleopenModal = () => {
    setisOpen(true);
  };
  const handlecloseModal = () => {
    setisOpen(false);
  };
  const toggleNav = () => {
    setminiSidebar(!minisidebar);
  };
  return (
    <div className="body">
      <aside className={(minisidebar ? "mini-sidebar" : "null") + " sidebar"}>
        <div className="brand-name">Gmart</div>
        <button
          className={minisidebar ? "max-btn" : "toggle-button"}
          onClick={() => toggleNav()}
        >
          <span>☰</span>
        </button>

        <ul className=" sidebar-items">
          <li className="sidebar-item">
            <i className="icon fas fa-home" />
            <NavLink
              to="/"
              className={minisidebar ? "mini-icons" : "max-icons"}
            >
              {" "}
              Overview
            </NavLink>
          </li>
          <li className="sidebar-item">
            <i className="icon fas fa-home" />
            <NavLink
              to="/"
              className={minisidebar ? "mini-icons" : "max-icons"}
            >
              Product
            </NavLink>
          </li>
          <li className="sidebar-item">
            <i className="icon fas fa-store" />
            <NavLink
              to="/"
              className={minisidebar ? "mini-icons" : "max-icons"}
            >
              {" "}
              create shop
            </NavLink>
          </li>
          <li className="sidebar-item">
            <i className=" icon fas fa-book" />
            <NavLink
              to="/"
              className={minisidebar ? "mini-icons" : "max-icons"}
            >
              {" "}
              order
            </NavLink>
          </li>
          <li className="sidebar-item">
            <i className="icon fas fa-user" />
            <NavLink
              to="/board"
              className={minisidebar ? "mini-icons" : "max-icons"}
            >
              {" "}
              trade
            </NavLink>
          </li>
          <li className="sidebar-item">
            <i className="icon fas fa-store" />
            <NavLink
              to="/"
              className={minisidebar ? "mini-icons" : "max-icons"}
            >
              {" "}
              bill payment
            </NavLink>
          </li>
          <li className="sidebar-item">
            <i className="icon fas fa-home" />
            <NavLink
              to="/"
              className={minisidebar ? "mini-icons" : "max-icons"}
            >
              {" "}
              setting
            </NavLink>
          </li>
        </ul>
      </aside>
      <main className={(minisidebar ? "max-main" : "") + "main"}>
        <div className="card-container">
          <div classname="card-wrapper">
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
          <div classname="card-wrapper">
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
          <div classname="card-wrapper">
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
          <div classname="card-wrapper">
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
          <div classname="card-wrapper">
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
        </div>
        <div className="n">
          <ImageSlider />
          <div className="button-wrapper">
            <button onClick={handleopenModal}>open Modal</button>
            <Modals
              Open={ismodal}
              onClose={() => {
                console.log("wdwd");
                setisOpen(false);
              }}
            >
              <div classname="card-wrapper">the modal is working</div>
            </Modals>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
