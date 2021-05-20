import React from "react";
import "./glassStyle.css";

const GlassmorphismContact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-row">
          <div className="contact-col">
            <div className="inputBox">
              <input type="text" name="" required />
              <span className="text">First Name</span>
              <span className="line"></span>
            </div>
          </div>
          <div className="contact-col">
            <div className="inputBox">
              <input type="text" name="" required />
              <span className="text">Last Name</span>
              <span className="line"></span>
            </div>
          </div>
        </div>
        <div className="contact-row">
          <div className="contact-col">
            <div className="inputBox">
              <input type="text" name="" required />
              <span className="text">Email</span>
              <span className="line"></span>
            </div>
          </div>
          <div className="contact-col">
            <div className="inputBox">
              <input type="text" name="" required />
              <span className="text">Mobile</span>
              <span className="line"></span>
            </div>
          </div>
        </div>
        <div className="contact-row">
          <div className="contact-col">
            <div className="inputBox textarea">
              <textarea required></textarea>
              <span className="text">Type your Message here</span>
              <span className="line"></span>
            </div>
          </div>
        </div>
        <div className="contact-row">
          <div className="contact-col">
            <input type="submit" value="send" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlassmorphismContact;
