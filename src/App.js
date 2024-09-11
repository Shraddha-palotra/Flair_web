import './App.css';
import {Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import SignUp from "./components/Pages/SignUp.jsx"
import SignIn from "./components/Pages/SignIn.jsx"
import Dashboard from './components/Dashboard/Dashboard.jsx';
import SuperAdmin from './components/Pages/SuperAdmin.jsx';
function App() {
  const [isOpen ,setIsOpen ] = useState(false)


  return ( 
    <>
    <div className='container-fluid w-100 p-0 m-0'></div>
  <Routes>
    <Route path="/" element={<SignUp/>}/>
    <Route path='/signin' element={<SignIn/>} />
    <Route path='/superadmin' element={<SuperAdmin/>} />
    <Route path='/dashboard' element={<Dashboard isOpen={isOpen} setIsOpen={setIsOpen}/>} />
  </Routes>
    </>
  );
}

export default App;
