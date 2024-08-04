import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Header.css";

const Header = () => {
  const [contactMethod, setContactMethod] = useState("email");
  const [explore, setExplore] = useState(false);
  const [explore2, setExplore2] = useState(false);
  const [explore3, setExplore3] = useState(false);
  const [explore4, setExplore4] = useState(false);

  const toggleExplore = () => {
    setExplore(!explore);
  };
  const toggleExplore2 = () => {
    setExplore2(!explore2);
  };
  const toggleExplore3 = () => {
    setExplore3(!explore3);
  };
  const toggleExplore4 = () => {
    setExplore4(!explore4);
  };

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
          <span className="zom-head2">Download app from</span>
        </div>
      </div>
      <img
        src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
        alt="gog-icon"
        className="gog-icon"
      />
      <img
        src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
        alt="gog-icon"
        className="gog-icon"
      />
      <div className="explore-heading">Explore options near me</div>
      <div className="explore-bars" onClick={toggleExplore}>
        <div className="bar">
          Popular cuisines near me
          {/* Button or div to toggle state */}
          {explore ? (
            <KeyboardArrowDownIcon className="arrow-icon" />
          ) : (
            <KeyboardArrowRightIcon className="arrow-icon" />
          )}
          {explore && (
            <>
              <div className="bar-content">
                Beverages food near me Biryani food near me Burger food near me
                Chinese food near me Coffee food near me Desserts food near me
                Ice Cream food near me Kebab food near me Maharashtrian food
                near me Momos food near me Mughlai food near me North Indian
                food near me Pizza food near me Rolls food near me Sandwich food
                near me Seafood food near me Shake food near me Sichuan food
                near me South Indian food near me Street food near me
              </div>
            </>
          )}
        </div>
      </div>
      <div className="explore-bars-1" onClick={toggleExplore2}>
        <div className="bar">
          Popular restaurant types near me
          {/* Button or div to toggle state */}
          {explore2 ? (
            <KeyboardArrowDownIcon className="arrow-icon" />
          ) : (
            <KeyboardArrowRightIcon className="arrow-icon" />
          )}
          {explore2 && (
            <>
              <div className="bar-content">
                Bakeries near me Bars near me Beverage Shops near me Bhojanalya
                near me Cafés near me Casual Dining near me Clubs near me
                Cocktail Bars near me Confectioneries near me Dessert Parlors
                near me Dhabas near meFine Dining near me Food Courts near me
                Food Trucks near me Irani Cafes near me Kiosks near meLounges
                near meMicrobreweries near me Paan Shop near me Pubs near me
                Quick Bites near me Sweet Shops near me
              </div>
            </>
          )}
        </div>
      </div>
      <div className="explore-bars-1" onClick={toggleExplore3}>
        <div className="bar">
          Top Restaurant Chains
          {/* Button or div to toggle state */}
          {explore3 ? (
            <KeyboardArrowDownIcon className="arrow-icon" />
          ) : (
            <KeyboardArrowRightIcon className="arrow-icon" />
          )}
          {explore3 && (
            <>
              <div className="bar-content">
                Domino's Dunkin' Donuts Faasos KFC McDonald's Paradise Biryani
                Subway WOW! Momo
              </div>
            </>
          )}
        </div>
      </div>
      <div className="explore-bars-1" onClick={toggleExplore4}>
        <div className="bar">
          Cities We Deliver To
          {/* Button or div to toggle state */}
          {explore4 ? (
            <KeyboardArrowDownIcon className="arrow-icon" />
          ) : (
            <KeyboardArrowRightIcon className="arrow-icon" />
          )}
          {explore4 && (
            <>
              <div className="bar-content-4">
                <span>Delhi NCR</span>
                <span>Kolkata</span>
                <span>Mumbai</span>
                <span>Bengaluru</span>
                <span>Pune</span>
                <span>Hyderabad</span>
                <span>Chennai</span>
                <span>Lucknow</span>
                <span>Kochi</span>
                <span>Jaipur</span>
                <span>Ahmedabad</span>
                <span>Chandigarh</span>
                <span>Goa</span>
                <span>Indore</span>
                <span>Gangtok</span>
                <span>Nashik</span>
                <span>Ooty</span>
                <span>Shimla</span>
                <span>Ludhiana</span>
                <span>Guwahati</span>
                <span>Amritsar</span>
                <span>Kanpur</span>
                <span>Allahabad</span>
                <span>Aurangabad</span>
                <span>Bhopal</span>
                <span>Ranchi</span>
                <span>Visakhapatnam</span>
                <span>Bhubaneswar</span>
                <span>Coimbatore</span>
                <span>Mangalore</span>
                <span>Vadodara</span>
                <span>Nagpur</span>
                <span>Agra</span>
                <span>Dehradun</span>
                <span>Mysore</span>
                <span>Puducherry</span>
                <span>Surat</span>
                <span>Varanasi</span>
                <span>Patna</span>
                <span>Udaipur</span>
                <span>Srinagar</span>
                <span>Khajuraho</span>
                <span>Neemrana</span>
                <span>Cuttack</span>
                <span>Trivandrum</span>
                <span>Haridwar</span>
                <span>Leh</span>
                <span>Pushkar</span>
                <span>Rajkot</span>
                <span>Madurai</span>
                <span>Kozhikode</span>
                <span>Alappuzha</span>
                <span>Thrissur</span>
                <span>Manipal</span>
                <span>Vijayawada</span>
                <span>Jodhpur</span>
                <span>Kota</span>
                <span>Ajmer</span>
                <span>Mussoorie</span>
                <span>Rishikesh</span>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="footer">
        <div className="footer-content">
          <div className="column">
            <h4>About Zomato</h4>
            <ul>
              <li>Who We Are</li>
              <li>Blog</li>
              <li>Work With Us</li>
              <li>Investor Relations</li>
              <li>Report Fraud</li>
              <li>Press Kit</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="column">
            <h4>Zomaverse</h4>
            <ul>
              <li>Zomato</li>
              <li>Blinkit</li>
              <li>Feeding India</li>
              <li>Hyperpure</li>
              <li>Zomaland</li>
              <li>Weather Union</li>
            </ul>
          </div>
          <div className="column">
            <h4>For Restaurants</h4>
            <ul>
              <li>Partner With Us</li>
              <li>Apps For You</li>
            </ul>
          </div>
          <div className="column">
            <h4>Learn More</h4>
            <ul>
              <li>Privacy</li>
              <li>Security</li>
              <li>Terms</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className="social-links">
            {/* <img src="india-flag.png" alt="India Flag" />
            <img src="english-language.png" alt="English Language" /> */}
            <div className="icons">
              <i class="bi bi-linkedin"></i>
              <i class="bi bi-instagram"></i>
              <i class="bi bi-twitter-x"></i>
              <i class="bi bi-youtube"></i>
              <i class="bi bi-facebook"></i>
            </div>
            <div className="store-links">
              <img
                src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                alt="gog-icon"
                className="gog-icon"
              />
              <img
                src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                alt="gog-icon"
                className="gog-icon"
              />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy, and Content Policies. All trademarks
            are properties of their respective owners. 2008-2024 © Zomato™ Ltd.
            All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
