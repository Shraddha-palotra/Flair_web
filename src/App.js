import './App.css';
import {Route, Routes } from "react-router-dom";
import React from 'react';
import SignUp from "./components/SignUp/SignUp.jsx"
import SignIn from "./components/SignIn/SignIn.jsx"
import Login from './components/Login/login.jsx';
function App() {
  return (
    <>
  <Routes>
    <Route path="/" element={<SignUp/>}/>
    <Route path='/signin' element={<SignIn/>} />
    <Route path='/login' element={<Login/>} />
  </Routes>
    </>
  );
}

export default App;
