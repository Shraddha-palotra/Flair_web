import React from "react";
import flairlogo from "../assets/icon/flairlogo.svg";
import search from "../assets/icon/search.svg";
import countrylogo from "../assets/icon/countrylogo.svg";
import notification from "../assets/icon/notification.svg";
import avatar from "../assets/image/avatar.jpg";

function Header() {
  return (
    <>
      <div className="wapper">
        <div className="header">
          <div className="logo">
            <div className="flair-logo d-flex">
              <img src={flairlogo} alt="" />
              <h5 className="fw-bolder m-2">Flair Web</h5>
            </div>
          </div>
          <div className="search">
            <div className="searchlogo">
              <div className="searchinput">
                <img src={search} alt="" />
                <input
                  className="input"
                  type="text"
                  id=""
                  placeholder="Search..."
                />
              </div>
            </div>
          </div>
          <div className="profile">
            <div className="countrylogo">
              <img src={countrylogo} alt="" />
            </div>
            <div className="notification">
              <img src={notification} alt="" />
            </div>
            <div className="avatar">
              <img className="imgavatar" src={avatar} alt="" />
            </div>
            <h6 className="name">shraddha palotra</h6>
          </div>
        </div>
        </div>
    </>
  );
}

export default Header;
