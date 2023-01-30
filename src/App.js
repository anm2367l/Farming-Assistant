
import './App.css';
import React from 'react';

import Login from './components/Login';

import {
  Routes,
  Route
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//CONTEXT
//import UserState from './state/userState';


const App = () => {
  return (
    <> 
      <Routes>
        <Route index path='/' element={<Login/>}/>         
        <Route exact path='*' element={<Login/>} /> 
      </Routes>
      <ToastContainer />  
    </>
  );
};

export default App;
