import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./Header.css";

const Header = () => {
  const [contactMethod, setContactMethod] = useState("email");

  const handleRadioChange = (event) => {
    setContactMethod(event.target.value);
  };
  return (
    <>
      <header className="header">
        <div className="header-left">Get Data</div>
        <div className="middle-content">
          <img
            src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
            alt="Logo"
            className="header-logo"
          />
          <div className="header-subheading">
            Discover the best food & drinks in Pune
          </div>
          <Dropdown />
        </div>
        <div className="header-right">
          <span>Investor Relations</span>
          <span>Add Restaurant</span>
          <span>Sign Up</span>
          <span>Log In</span>
        </div>
      </header>
      <div className="options">
        <div className="tabs">
          <img
            src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
            alt="img"
            className="options-img"
          />
          <span className="option-heading">Orde Online</span>
          <span className="option-subheading">
            Stay home and order to your doorstep
          </span>
        </div>
        <div className="tabs">
          <img
            src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
            alt="img"
            className="options-img"
          />
          <span className="option-heading">Dining</span>
          <span className="option-subheading">
            View the city's favourite dining venues
          </span>
        </div>
        <div className="tabs">
          <img
            src="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
            alt="img"
            className="options-img"
          />
          <span className="option-heading">Nightlife and Clubs</span>
          <span className="option-subheading">
            Explore the city's top nightlife outlet's
          </span>
        </div>
      </div>
      <div className="collec-heading">Collection</div>
      <div className="collec-subheading">
        Explore curated lists of top restaurants, cafes, pubs, and bars in Pune,
        based on trends
      </div>
      <div className="Collection-tabs">
        <div className="collec-tab one">
          <span>Something special for every friend.</span>
        </div>
        <div className="collec-tab two">
          <span>Top Trending Sports</span>
        </div>
        <div className="collec-tab three">
          <span>Romantic Dining Places</span>
        </div>
        <div className="collec-tab four">
          <span>Best Insta Worthy Places</span>
        </div>
      </div>
      <div className="local-heading">Popular localities in and around Pune</div>
      <div className="row-1">
        <div className="loc">
          <span>Baner</span>
          <i class="bi bi-arrow-right-short"></i>
        </div>
        <div className="loc">
          <span>Viman Nagar</span>
          <i class="bi bi-arrow-right-short"></i>
        </div>
        <div className="loc">
          <span>Hinjewadi</span>
          <i class="bi bi-arrow-right-short"></i>
        </div>
        <div className="loc">
          <span>Wakad</span>
          <i class="bi bi-arrow-right-short"></i>
        </div>
      </div>
      <div className="row-2">
        <div className="loc">
          <span>Koregoan Park</span>
        </div>
        <div className="loc">
          <span>Kothrud</span>
        </div>
        <div className="loc">
          <span>Kalyani Nagar</span>
        </div>
        <div className="loc">
          <span>Kharadi</span>
        </div>
      </div>
      <div className="row-2">
        <div className="loc">
          <span>Anudh</span>
        </div>
        <div className="loc">
          <span>FC Road</span>
        </div>
        <div className="loc">
          <span>Magarpatta</span>
        </div>
        <div className="loc">
          <span>Bavdhan</span>
        </div>
      </div>

      <div className="zom-app">
        <img
          src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png"
          alt="app-img"
          className="app-logo"
        />
        <div className="zom-content">
          <span className="zom-heading">Get the Zomato app</span>
          <span className="zom-subheading">
            We will send you a link, open it on your phone to download the app
          </span>
          <div className="radio-buttons">
            <label>
              <input
                type="radio"
                name="contact"
                value="email"
                checked={contactMethod === "email"}
                onChange={handleRadioChange}
              />{" "}
              Email
            </label>
            <label>
              <input
                type="radio"
                name="contact"
                value="phone"
                checked={contactMethod === "phone"}
                onChange={handleRadioChange}
              />{" "}
              Phone
            </label>
          </div>
          <div className="input-container">
            <input
              type="text"
              className="contact-input"
              placeholder={contactMethod === "email" ? "Email" : "+91"}
            />
            <button className="share-button">Share App Link</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
