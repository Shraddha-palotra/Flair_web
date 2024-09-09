import React, { useEffect, useState } from "react";
import flairlogo from "../assets/icon/flairlogo.svg";
import search from "../assets/icon/search.svg";
import countrylogo from "../assets/icon/countrylogo.svg";
import notification from "../assets/icon/notification.svg";
import avatar from "../assets/image/avatar.jpg";
import { Link } from "react-router-dom";


function Header() {

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [loggedUser, setLoggedUser] = useState({});

  const openCollapsedHandler = () => {
    setIsCollapsed(!isCollapsed);
  };

  const closeHandler = (e) => {
    if (!e.target.closest(".dropdown")) {
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
    window.localStorage.removeItem('token');
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
              <div className="avatar">
                <img className="imgavatar" src={avatar} alt="" />
              </div>
              <h6>Admin</h6>

              {/* <div className="profileDrop">
                <ul>
                  <li><button>Profile</button></li>
                  <li><button>Account</button></li>
                  <li><button>My Task</button></li>
                  <li><button>Logout</button></li>
                </ul>
              </div> */}
                <div className="avatar">
                    <div className="dropdown">
                      <span className="d-flex align-items-center cusProfileCir">
                        <button
                          className={`dropdown-toggle ${
                            isCollapsed ? "show" : ""
                          }`}
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded={isCollapsed ? "true" : "false"}
                          onClick={openCollapsedHandler}
                        >
                          <img
                            src={
                              loggedUser?.profileImage
                                ? `http://localhost:8080${loggedUser.profileImage}`
                                : avatar
                            }
                            alt=""
                          />
                          <h6>
                            {/* {loggedUser ? loggedUser.name : " "} */}
                            {loggedUser?.name}
                            <span>Admin</span>
                          </h6>
                        </button>
                      </span>
                      <ul
                        className={`dropdown-menu ${isCollapsed ? "show" : ""}`}
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <Link to="/profile" className="dropdown-item">
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link to="/change-password" className="dropdown-item">
                            Change Password
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/login"
                            className="dropdown-item"
                            onClick={logOut}
                          >
                            Log Out
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
