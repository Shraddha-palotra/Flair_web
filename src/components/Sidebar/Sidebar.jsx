import React, { useEffect } from "react";
import signup from "../../assets/icon/signup.svg";
import signIn from "../../assets/icon/singIn.svg";
import user from "../../assets/icon/user.svg";
import contact from "../../assets/icon/contact.svg";
import dashboard from "../../assets/icon/dashboard.svg";
// import logout from "../assets/icon/logout.svg";
import { Link, useNavigate } from "react-router-dom";

function Sidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  // const [isClickedInside, setIsClickedInside] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebarElement = document.querySelector(".sidebar");
      if (sidebarElement && !sidebarElement.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <>
      <div className="sidebar des_media">
        <ul>
          <li>
            <button
              className="Mui-selected"
              onClick={() => navigate("/dashboard")}
            >
              <img className="me-1" src={dashboard} alt="" />
              Dashboard
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/notfound")}>
              {" "}
              <img className="signupimg" src={user} alt="" /> User
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/notfound")}>
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
            </button>
          </li>
          {/* <li>
            <button>
              <img className="" src={logout} alt="" /> Log Out
            </button>
          </li> */}
        </ul>
      </div>
      <div className={`mianSidemobile  ${isOpen ? "" : "collapsed "}`}>
        <div className="sidebar mobile_media">
          <ul>
            <li>
              <Link to="/dashboard">
                <button className="Mui-selected">Dashboard</button>
              </Link>
            </li>
            <li>
              <Link to="/notfound">
                <button>
                  {" "}
                  <img className="signupimg" src={user} alt="" /> User
                </button>
              </Link>
            </li>
            <li>
              <Link to="/notfound">
                <button>
                  {" "}
                  <img className="" src={contact} alt="" /> Contact
                </button>
              </Link>
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
            {/* <li>
            <button>
              <img className="" src={logout} alt="" /> Log Out
            </button>
          </li> */}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
