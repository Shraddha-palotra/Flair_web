import React, { useEffect, useState } from "react";
import flairlogo from "../../assets/icon/flairlogo.svg";
import search from "../../assets/icon/search.svg";
import countrylogo from "../../assets/icon/countrylogo.svg";
import notification from "../../assets/icon/notification.svg";
import avatar from "../../assets/image/avatar.jpg";
import profile from "../../assets/icon/profile.svg";
import account from "../../assets/icon/account.svg";
import task from "../../assets/icon/task.svg";
import logout from "../../assets/icon/logout.svg";
import collapsebtn from "../../assets/icon/collapsbtn.svg";
import countrylogo2 from "../../assets/icon/countrylogo2.svg";
import countrylogo3 from "../../assets/icon/countrylogo3.svg";
import { useNavigate } from "react-router-dom";

function Header({ setIsOpen, isOpen }) {
  const navigate = useNavigate();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [loggedUser, setLoggesUser] = useState({});

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (type) => {
    if (type === "profile") {
      setIsProfileDropdownOpen((prev) => !prev);
      setIsCountryDropdownOpen(false); // Close the country dropdown if open
    } else if (type === "country") {
      setIsCountryDropdownOpen((prev) => !prev);
      setIsProfileDropdownOpen(false); // Close the profile dropdown if open
    }
  };

  const closeDropdowns = (e) => {
    if (
      !e.target.closest(".profileDrop") &&
      !e.target.closest(".avatar-container") &&
      !e.target.closest(".countrylogoDrop") &&
      !e.target.closest(".countryflags")
    ) {
      setIsProfileDropdownOpen(false);
      setIsCountryDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdowns);
    return () => {
      document.removeEventListener("mousedown", closeDropdowns);
    };
  }, []);

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
              <img src={collapsebtn} alt="" />
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
              <div
                className="countryflags"
                onClick={() => toggleDropdown("country")}
              >
                <img src={countrylogo} alt="" />
                {isCountryDropdownOpen && (
                  <div className="countrylogoDrop">
                    <ul>
                      <li>
                        <button onClick={() => navigate("/notfound")}>
                          <img src={countrylogo} alt="" /> British
                        </button>
                      </li>
                      <li>
                        <button onClick={() => navigate("/notfound")}>
                          <img src={countrylogo2} alt="" /> English
                        </button>
                      </li>
                      <li>
                        <button onClick={() => navigate("/notfound")}>
                          {" "}
                          <img src={countrylogo3} alt="" /> Bangla
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="notification">
                <img src={notification} alt="" />
              </div>
              <div
                className="avatar-container"
                onClick={() => toggleDropdown("profile")}
              >
                <img className="imgavatar" src={avatar} alt="" />
                <h6 className="profile-name">
                  {loggedUser?.name || "Shraddha Palotra"}

                </h6>
              </div>
              {isProfileDropdownOpen && (
                <div className="profileDrop">
                  <ul>
                    <li>
                      <button onClick={() => navigate("/notfound")}>
                        <img src={profile} alt="" /> Profile
                      </button>
                    </li>
                    <li>
                      <button onClick={() => navigate("/notfound")}>
                        <img src={account} alt="" /> Account
                      </button>
                    </li>
                    <li>
                      <button onClick={() => navigate("/notfound")}>
                        {" "}
                        <img src={task} alt="" /> My Task
                      </button>
                    </li>
                    <li>
                      <button onClick={() => navigate("/")}>
                        <img src={logout} alt="" /> Logout
                      </button>
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
