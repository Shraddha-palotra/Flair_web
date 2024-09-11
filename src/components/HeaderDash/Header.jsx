import React, { useEffect, useState } from "react";
import flairlogo from "../../assets/icon/flairlogo.svg";
import search from "../../assets/icon/search.svg";
import countrylogo from "../../assets/icon/countrylogo.svg";
import notification from "../../assets/icon/notification.svg";
import avatar from "../../assets/image/avatar.jpg";
import profile from '../../assets/icon/profile.svg';
import account from '../../assets/icon/account.svg';
import task from '../../assets/icon/task.svg';
import logout from '../../assets/icon/logout.svg'
import collapsebtn from '../../assets/icon/collapsbtn.svg'
import { Link } from "react-router-dom";

function Header({ setIsOpen, isOpen }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [loggedUser, setLoggedUser] = useState({});

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsCollapsed((prev) => !prev);
  };
  
  const closeHandler = (e) => {
    if (!e.target.closest(".profileDrop") && !e.target.closest(".avatar-container")) {
      setIsCollapsed(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeHandler);
    return () => {
      document.removeEventListener("mousedown", closeHandler);
    };
  }, []);

  const logOut = () => {
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("token");
    setLoggedUser(null);
  };

  return (
    <>
      <div className="wapper">
        <div className="header ">
          <div className="hedaLeftSection">
            <div className="logo">
              <div className="flair-logo d-flex">
                <img src={flairlogo} alt="" />
                <h5 className="fw-bolder m-2">Flair Web</h5>
              </div>
            </div>
            <div className="collaps-btn" onClick={toggleSidebar}>
              <img src={collapsebtn} alt=""/>
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
          </div>
          <div className="hedarightSection">
            <div className="profile">
              <div className="countrylogo">
                <img src={countrylogo} alt="" />
              </div>
              <div className="notification">
                <img src={notification} alt="" />
              </div>
              <div className="avatar-container" onClick={toggleDropdown}>
                <img className="imgavatar" src={avatar} alt="" />
                <h6 className="profile-name">{loggedUser.name || "Admin"}</h6>
              </div>

              {isCollapsed && (
                <div className="profileDrop">
                  <ul>
                    <li>
                      <Link to="/">
                      
                        <button><img src={profile} alt="" /> Profile</button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <button><img src={account} alt="" /> Account</button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <button> <img src={task} alt=""/> My Task</button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/signin">
                        <button onClick={logOut}><img src={logout} alt=""/> Logout</button>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
