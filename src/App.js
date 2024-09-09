import './App.css';
import {Route, Routes } from "react-router-dom";
import React from 'react';
import SignUp from "./components/SignUp/SignUp.jsx"
import SignIn from "./components/SignIn/SignIn.jsx"
import Dashboard from './components/Dashboard/Dashboard.jsx';
import SuperAdmin from './components/SuperAdmin/SuperAdmin.jsx';
function App() {
  return (
    
    <>
    <div className='container-fluid w-100 p-0 m-0'></div>
  <Routes>
    <Route path="/" element={<SignUp/>}/>
    <Route path='/signin' element={<SignIn/>} />
    <Route path='/superadmin' element={<SuperAdmin/>} />
    <Route path='/dashboard' element={<Dashboard/>} />
  </Routes>
    </>
  );
}

export default App;
