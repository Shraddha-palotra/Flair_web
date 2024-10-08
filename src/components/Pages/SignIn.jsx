import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/icon/google.svg";
import facebook from "../../assets/icon/facebook.svg";
import axios from "axios";

function SignIn() {
  const [email, setEmail] = useState("");
  const [emailVerificationPin, setEmailVerificationPin] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateOtp = (otp) => {
    return otp.length === 4 && /^\d+$/.test(otp);
  };

  const sendEmailOtp = async () => {
    if (!validateEmail(email)) {
      setErrors({ email: "Please enter a valid email address" });
      return;
    }
    setErrors({});
    try {
      const response = await axios.post(
        "http://192.168.1.67:8081/auth/loginVerifyEmail",
        { email }
      );
      console.log(response.data);
      alert(response.data.message);
    } catch (error) {
      console.log("error are ", error);
      alert("Failed to send OTP to email.");
    }
  };

  const verifyEmailOtp = async () => {
    if (!validateOtp(emailVerificationPin)) {
      setErrors({ emailVerificationPin: "Please enter a valid 4-digit OTP" });
      return;
    }
    setErrors({});

    try {
      const response1 = await axios.post(
        "http://192.168.1.67:8081/auth/loginVerifyEmailOtp",
        { email, emailVerificationPin }
      );
      console.log(response1.data);
      alert(response1.data.message);
    } catch (error) {
      console.log("error are ", error);
      alert("Failed to verify email OTP.");
    }
  };

  const signin = async () => {
    const newErrors = {}; 
  
    // Validate email
    if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }
  
    // Validate OTP
    if (!validateOtp(emailVerificationPin)) {
      newErrors.emailVerificationPin = "Please enter a valid 4-digit OTP";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    try {
      const response4 = await axios.post("http://192.168.1.67:8081/auth/login", {
        email,
        emailVerificationPin,
      });
      console.log(response4.data);
      alert(response4.data.message);
      navigate("/dashboard");
    } catch (error) {
      console.log("error are ", error);
      alert("Failed to Sign in...");
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
                    <h1>Sign In</h1>
                    <p>
                      New to our product?<Link to="/">SignUp</Link>
                    </p>
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
                          <button className="verify-btn" onClick={sendEmailOtp}>
                            Send
                          </button>
                        </div>
                        {errors.email && (
                          <p className="error-text">{errors.email}</p>
                        )}
                      </div>
                      <div className="col-md-12">
                        <label
                          htmlFor="email-otp"
                          className="custom-form-label"
                        >
                          Enter Email Otp
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="custom-input-field"
                            id="email-otp"
                            value={emailVerificationPin}
                            placeholder="Enter Email Otp"
                            onChange={(e) => {
                              setEmailVerificationPin(e.target.value);
                            }}
                          />
                          <button
                            className="verify-btn"
                            onClick={verifyEmailOtp}
                          >
                            Verify
                          </button>
                        </div>
                        {errors.emailVerificationPin && (
                          <p className="error-text">
                            {errors.emailVerificationPin}
                          </p>
                        )}
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
                            keep me signed in
                          </label>
                        </div>
                      </div>
                      <div className="col-md-12 mt-4 mb-3">
                        <button className="custom-btn" onClick={signin}>
                          SignIn
                        </button>
                      </div>
                      <hr></hr>
                      <div className="heading-text text-center mt-1">
                        <p>Or sign in using: </p>
                      </div>
                      <div className="custom-btn1 col-md-12 mt-2 text-center">
                        <button className="btn1">
                          <Link>
                            <img className="me-1" src={google} alt="" />{" "}
                            Continue with Google
                          </Link>
                        </button>
                      </div>
                      <div className="custom-btn1 col-md-12 mt-2 text-center">
                        <button className="btn1">
                          <Link>
                            {" "}
                            <img className="me-1" src={facebook} alt="" />{" "}
                            Continue with Facebook{" "}
                          </Link>
                        </button>
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

export default SignIn;
