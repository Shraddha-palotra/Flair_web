import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SuperAdmin() {
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCredentials =JSON.parse(localStorage.getItem('credentials'));
    if (savedCredentials) {
      setEmail(savedCredentials.email);
      setPin(savedCredentials.pin); 
      setIsChecked(true);
    }
  }, [])

  const SuperAdminLogin = async () => {
    try {
      const response = await axios.post(
        "http://192.168.1.67:8081/admin/superAdmin",
        {
          email,
          pin,
        }
      );
      if (response.data.success) { 
        alert(response.data.message);
        console.log(response.data);
        if (isChecked) {
          localStorage.setItem("credentials", JSON.stringify({ email, pin}));
        } else {
          localStorage.removeItem("credentials");
        }
        navigate("/dashboard");
      } else {
        alert(response.data.message || "Invalid login details");
      }
    } catch (error) {
      console.log(
        "Error details: ",
        error.response ? error.response.data : error.message
      );
      alert(error.response?.data?.message || "Failed to SuperAdmin Login..");
    }
  };

  return (
    <>
      <div className="card-container">
        <div className="signup">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xxl-3 col-lx-6 col-lg-6 col-md-10 col-sm-11 col-11 mx-auto">
                <div className="signup-form">
                  <div className="heading-text text-center">
                    <h1>Super Admin</h1>
                    {/* <p>LogIn <Link to="/">Signup</Link></p> */}
                  </div>
                  <div className="form">
                    <div className="row g-2">
                      <div className="col-md-12">
                        <label htmlFor="email" className="custom-form-label">
                          Enter Email
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="custom-input-field"
                            id="email"
                            value={email}
                            placeholder="Enter Email"
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                          {/* <button className="verify-btn">Send</button> */}
                        </div>
                      </div>
                      <div className="col-md-12">
                        <label
                          htmlFor="email-pin"
                          className="custom-form-label"
                        >
                          Enter Pin
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="custom-input-field"
                            id="email-pin"
                            value={pin}
                            placeholder="Enter Pin"
                            onChange={(e) => {
                              setPin(e.target.value);
                            }}
                          />
                          {/* <button className="verify-btn">Verify</button> */}
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="rememberMe"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="rememberMe"
                          >
                            keep me Logged in
                          </label>
                        </div>
                      </div>
                      <div className="col-md-12 mt-4 mb-3">
                        <button
                          className="custom-btn"
                          onClick={SuperAdminLogin}
                        >
                          LogIn
                        </button>
                      </div>
                      <div>
                        <p>
                          <Link to="/dashboard">Dashboard</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuperAdmin;
