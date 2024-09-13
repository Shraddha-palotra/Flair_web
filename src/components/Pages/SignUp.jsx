import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/icon/google.svg";
import facebook from "../../assets/icon/facebook.svg";
import axios from "axios";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNum, setPhoneNum] = useState("");
  const [emailVerificationPin, setEmailVerificationPin] = useState("");
  const [phoneVerificationPin, setPhoneVerificationPin] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePhone = (phone) => {
    const phonePattern = /^\d{10}$/; 
    return phonePattern.test(phone);
  };

 
  const validateOtp = (otp) => {
    const otpPattern = /^\d{4}$/;
    return otpPattern.test(otp);
  };

  const sendEmailOtp = async () => {
    if (!username || !validateEmail(email)) {
      setErrors({
        username: !username ? "Username is required" : "",
        email: !validateEmail(email) ? "Please enter a valid email" : "",
      });
      return;
    }
    try {
      const response = await axios.post(
        "http://192.168.1.67:8081/auth/verifyEmail",
        { username, email }
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
    try {
      const response1 = await axios.post(
        "http://192.168.1.67:8081/auth/verifyEmailOtp",
        { username, email, emailVerificationPin }
      );
      console.log(response1.data);
      alert(response1.data.message);
    } catch (error) {
      console.log("error are ", error);
      alert("Failed to verify email OTP.");
    }
  };

  const sendPhoneNumberOtp = async () => {
    if (!validatePhone(phoneNum)) {
      setErrors({ phoneNum: "Please enter a valid 10-digit phone number" });
      return;
    }
    try {
      const response2 = await axios.post("http://192.168.1.67:8081/auth/verifyPhone", {
        countryCode,
        email,
        phoneNum,
      });
      console.log(response2.data);
      alert(response2.data.message);
    } catch (error) {
      console.log("error are ", error);
      alert("Failed to send phone number OTP.");
    }
  };

  const verifiyPhoneNumberOtp = async () => {
    if (!validateOtp(phoneVerificationPin)) {
      setErrors({ phoneVerificationPin: "Please enter a valid 4-digit OTP" });
      return;
    }
    try {
      const response3 = await axios.post("http://192.168.1.67:8081/auth/verifyPhoneOtp", {
        email,
        phoneVerificationPin,
      });
      console.log(response3.data);
      alert(response3.data.message);
    } catch (error) {
      console.log("error are ", error);
      alert("Failed to verify phone number OTP.");
    }
  };


  const signup = async () => {
    if (!username || !validateEmail(email) || !validatePhone(phoneNum)) {
      setErrors({
        username: !username ? "Username is required" : "",
        email: !validateEmail(email) ? "Please enter a valid email" : "",
        phoneNum: !validatePhone(phoneNum) ? "Please enter a valid 10-digit phone number" : "",
      });
      return;
    }
    try {
      const response4 = await axios.post("http://192.168.1.67:8081/auth/signup", {
        username,
        email,
        countryCode,
        phoneNum,
      });
      console.log(response4.data);
      alert(response4.data.message);
      navigate('/signin');
    } catch (error) {
      console.log("error are ", error);
      alert("Failed to Signup...");
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
                    <h1>Create New Account </h1>
                    <p>
                      Have an account?<Link to="/signin">SignIn</Link>
                    </p>
                  </div>
                  <div className="form">
                    <div className="row g-2">
                      <div className="col-md-12">
                        <label htmlFor="name" className="custom-form-label">
                          Enter Name
                        </label>
                        <input
                          type="text"
                          className="custom-input-field"
                          id="name"
                          value={username}
                          placeholder="Enter Name"
                          onChange={(e) => {
                            setUsername(e.target.value);
                          }}
                        />
                        {errors.username && <p className="error-text">{errors.username}</p>}
                      </div>
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
                        {errors.email && <p className="error-text">{errors.email}</p>}
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
                          <button className="verify-btn" onClick={verifyEmailOtp}>Verify</button>
                        </div>
                        {errors.emailVerificationPin && <p className="error-text">{errors.emailVerificationPin}</p>}
                      </div>
                      <div className="col-md-12">
                        <label htmlFor="number" className="custom-form-label">
                          Enter Phone Number
                        </label>
                        <div className="input-group">
                          <select
                            id="countryCode"
                            name="countryCode"
                            value={countryCode}
                            onChange={(e) => {
                              setCountryCode(e.target.value);
                            }}
                            className="custom-select-field"
                          >
                            <option value="+91">+91 (India)</option>
                            <option value="+44">+44 (UK)</option>
                            <option value="+1">+1 (US) </option>
                          </select>
                          <input
                            type="text"
                            className="custom-input-field"
                            id="number"
                            value={phoneNum}
                            placeholder="Enter Phone Number"
                            onChange={(e) => {
                              setPhoneNum(e.target.value);
                            }}
                          />
                          <button className="verify-btn" onClick={sendPhoneNumberOtp}>Send</button>
                        </div>
                        {errors.phoneNum && <p className="error-text">{errors.phoneNum}</p>}
                      </div>
                      <div className="col-md-12">
                        <label
                          htmlFor="number-otp"
                          className="custom-form-label"
                        >
                          Enter Number Otp
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="custom-input-field"
                            id="number-otp"
                            value={phoneVerificationPin}
                            placeholder="Enter Number Otp"
                            onChange={(e) => {
                              setPhoneVerificationPin(e.target.value);
                            }}
                          />
                          <button className="verify-btn" onClick={verifiyPhoneNumberOtp}>Verify</button>
                        </div>
                        {errors.phoneVerificationPin && <p className="error-text">{errors.phoneVerificationPin}</p>}
                      </div>
                      <div className="col-md-12 mt-4">
                        <button className="custom-btn" onClick={signup}>Signup</button>
                      </div>
                      <div className="heading-text text-center">
                        <p>By creating account, you agree to our</p>
                        <Link>Terms of service</Link>
                      </div>
                      <hr></hr>
                      <div className="heading-text text-center mt-2">
                        <p>Or create an account using:</p>
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

export default SignUp;
