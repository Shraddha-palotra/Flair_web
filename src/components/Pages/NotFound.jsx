import React from "react";
import notfound from "../../assets/icon/notfound.svg";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const naviagte = useNavigate()
  return (
    <>
      <div className="notfoundimg">
        <img src={notfound} alt="" />
      </div>
      <div className="error">
        <h1 className="d-flex justify-content-center m-3 fs-1 fw-bolder">Error 404</h1>
        <p className="text-danger d-flex justify-content-center m-3 fw-bold">page Not Found</p>
      </div>
      <div className="d-flex justify-content-center">
          <button className="backbtn" onClick={ () => {
           naviagte('/dashboard')
          }}>Back To Home</button>
      </div>
      
    </>
  );
}

export default NotFound;
