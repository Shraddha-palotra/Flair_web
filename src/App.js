import './App.css';
import {Route, Routes } from "react-router-dom";
import React from 'react';
import SignUp from "./components/SignUp/SignUp.jsx"
import SignIn from "./components/SignIn/SignIn.jsx"
import Login from './components/Login/login.jsx';
import Header from './components/HeaderDash/Header.jsx';
function App() {
  return (
    
    <>
    <div className='container-fluid w-100 p-0 m-0'></div>
  <Routes>
    <Route path="/" element={<SignUp/>}/>
    <Route path='/signin' element={<SignIn/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/header' element={<Header/>} /> 
  </Routes>
    </>
  );
}

export default App;
