import React from "react";
import signup from "../assets/icon/signup.svg";
import signIn from "../assets/icon/singIn.svg";
import user from "../assets/icon/user.svg";
import contact from "../assets/icon/contact.svg";
import logout from "../assets/icon/logout.svg";
import { useNavigate } from "react-router-dom";


function Sidebar() {
  const navigate = useNavigate()
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <button className="Mui-selected">Dashboard</button>
          </li>
          <li>
            <button>
              {" "}
              <img className="signupimg" src={user} alt="" /> User
            </button>
          </li>
          <li>
            <button>
              {" "}
              <img className="" src={contact} alt="" /> Contact
            </button>
          </li>
        </ul>
        <h2>Authentication</h2>
        <ul className="authSitebar">
          <li className="text-secondary">
            <button onClick={() => navigate("/")}>
              <img className="signupimg" src={signup} alt="" /> Sign Up
            </button>
          
          </li>
          <li>
            <button onClick={() => navigate("/signin")}>
              <img className="signupimg" src={signIn} alt="" />
              Sign In
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/superadmin")}>
              <img className="signupimg" src={signIn} alt="" /> Super Admin
              LogIn
            </button>
          </li>
          <li>
            <button>
              <img className="" src={logout} alt="" /> Log Out
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
