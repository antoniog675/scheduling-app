import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Component
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import BookUser from "./components/BookUser";
import ErrorPage from './components/ErrorPage';

// React toastify config
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} /> 
          <Route path='/register' element={<Signup/>} /> 
          <Route path='/dashboard' element={<Dashboard/>} /> 
          <Route path='/profile/:id' element={<Profile/>} /> 
          <Route path='/book/:user' element={<BookUser/>} /> 
          <Route path='/error' element={<ErrorPage/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
