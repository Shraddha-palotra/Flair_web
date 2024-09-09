import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../HeaderDash/Header";
import dollar from "../assets/icon/dollar.svg";
import cart from '../assets/icon/cart.svg';
import user1 from '../assets/icon/user.svg';
import users from '../assets/icon/users.svg';

function Dashboard() {
  return (
    <>
      <div className="mainBody">
        <Header />
        <Sidebar />
        <div className="body_container">
          <h1>Dashboard</h1>
          <div className="dashbox">
            <div className="row">
              <div className="col-md-6">
                <div className="dashcantentbox">
                  <h2>$10,540</h2>
                  <p className="m-1 text-secondary">Total Revenue</p>
                  <p className="m-1 text-success">
                    22.45%<i className="bi bi-chevron-up ms-2"></i>
                  </p>
                  <div className="dashcontentbox1">
                    <div className="contentbox">
                      <img src={dollar} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="dashcantentbox">
                  <h2>$1,056</h2>
                  <p className="m-1 text-secondary">Orders</p>
                  <p className="m-1 text-success">
                    22.45%<i className="bi bi-chevron-up ms-2"></i>
                  </p>
                  <div className="dashcontentbox1">
                    <div className="contentbox">
                      <img src={cart} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="dashcantentbox">
                  <h2>$56</h2>
                  <p className="m-1 text-secondary">Active Sessions</p>
                  <p className="m-1 text-danger">
                    2.45%<i className="bi bi-chevron-down ms-2"></i>
                  </p>
                  <div className="dashcontentbox1">
                    <div className="contentbox">
                      <img src={user1} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="dashcantentbox">
                  <h2>$56</h2>
                  <p className="m-1 text-secondary">Total Sessions</p>
                  <p className="m-1 text-danger">
                    0.45%<i className="bi bi-chevron-down ms-2"></i>
                  </p>
                  <div className="dashcontentbox1">
                    <div className="contentbox">
                      <img src={users} alt="" />
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

export default Dashboard;
