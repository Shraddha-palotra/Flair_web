import React, { useState } from 'react';

const Logout = () => {
  const [show, setShow] = useState(false);

  const handleLogout = () => {
    console.log('Logged out');
    setShow(false);
  };

  return (
     <div className="card-container">
      <button onClick={() => setShow(true)}>Logout</button>

      {show && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Logout</h2>
            <p>Are you sure you want to logout?</p>
            <div className="modal-buttons">
              <button className="btn btn-no" onClick={() => setShow(false)}>
                No
              </button>
              <button className="btn btn-yes" onClick={handleLogout}>
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logout;
