import React from "react";
import { Link } from "react-router-dom";
import google from "../assets/icon/google.svg";
import facebook from "../assets/icon/facebook.svg";

function SignIn() {
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
                      New to our product?<Link to="/login">LogIn</Link>
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
                            placeholder="Enter Email"
                          />
                          <button className="verify-btn">Verify</button>
                        </div>
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
                            placeholder="Enter Email Otp"
                          />
                          <button className="verify-btn">Verify</button>
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
                            keep me signed in
                          </label>
                        </div>
                      </div>
                      <div className="col-md-12 mt-4 mb-3">
                        <button className="custom-btn">SignIn</button>
                      </div>
                      <hr></hr>
                      <div className="heading-text text-center mt-1">
                        <p>Or sign in using: </p>
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

export default SignIn;
