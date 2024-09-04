import React from "react";
import { Link } from "react-router-dom";
import google from "../assets/icon/google.svg";
import facebook from "../assets/icon/facebook.svg";

function SignUp() {
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
                          placeholder="Enter Name"
                        />
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
                          placeholder="Enter Email"
                        />
                        <button className="verify-btn">Send</button>
                      </div>
                      </div>
                      <div className="col-md-12">
                        <label htmlFor="email-otp" className="custom-form-label">
                          Enter Email Otp
                        </label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="custom-input-field"
                          id="email-otp"
                          placeholder="Enter Email Otp"
                        />
                        <button className="verify-btn">Verify</button>
                      </div>
                    </div>
                      <div className="col-md-12">
                        <label htmlFor="number" className="custom-form-label">
                          Enter Phone Number
                        </label>
                        <div className="input-group">
                          <select
                            id="countryCode"
                            name="countryCode"
                            className="custom-select-field"
                          >
                            <option value="+1">+1 (US)</option>
                            <option value="+44">+44 (UK)</option>
                            <option value="+91">+91 (India)</option>
                          </select>
                          <input
                            type="text"
                            className="custom-input-field"
                            id="number"
                            placeholder="Enter Phone Number"
                          />
                          <button className="verify-btn">Send</button>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <label htmlFor="number-otp" className="custom-form-label">
                          Enter Number Otp
                        </label>
                        <div className="input-group">
                        <input
                          type="text"
                          className="custom-input-field"
                          id="number-otp"
                          placeholder="Enter Number Otp"
                        />
                        <button className="verify-btn">Verify</button>
                      </div>
                    </div>
                      <div className="col-md-12 mt-4">
                        <button className="custom-btn">Signup</button>
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
                        <button className="btn">
                          <Link>
                            <img className="me-1" src={google} alt="" />{" "}
                            Continue with Google
                          </Link>
                        </button>
                      </div>
                      <div className="custom-btn1 col-md-12 mt-2 text-center">
                        <button className="btn">
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
