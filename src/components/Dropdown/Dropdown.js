import React from "react";
import styles from "./Dropdown.module.css";

const Dropdown = () => {
  return (
    <>
      <header>
        <div className={styles.nav_area}>
          <ul>
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              {" "}
              <a href="/#">About</a>
              <ul>
                <li>
                  <a href="/#">Vision</a>{" "}
                </li>
                <li>
                  <a href="/#">culture</a>{" "}
                </li>
                <li>
                  <a href="/#">meet the team</a>{" "}
                </li>
                <li>
                  <a href="/#">services</a>{" "}
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a href="/#">services</a>
              <ul>
                <li>
                  <a href="/#">Web design</a>
                </li>
                <li>
                  <a href="/#">graphic design</a>
                </li>
                <li>
                  <a href="/#">wordpress design</a>
                </li>
                <li>
                  <a href="/#">digital marketing</a>
                </li>
                <li>
                  <a href="/#">content writing</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/#">blog</a>
            </li>
            <li>
              <a href="/#">contact</a>
            </li>
          </ul>
        </div>
      </header>

      <div className="wew">
        <p>
          <ul>
            <li>thern</li>
            <li>thern</li>
            <li>thern</li>
            <li>thern</li>
            <li>thern</li>
          </ul>
        </p>
      </div>
    </>
  );
};

export default Dropdown;
