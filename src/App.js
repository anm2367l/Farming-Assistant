
import './App.css';
import React from 'react';


import GestionProyectos from './components-visor/GestionProyectos';
import Login from './components-visor/Login';

import {
  Routes,
  Route
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//CONTEXT
import UserState from './state/userState';


const App = () => {
  return (
    <>
      <UserState>      
        <Routes>
          <Route index path='/' element={<Login/>}/> 
          <Route index path='/GestionProyectos' element={<GestionProyectos/>}/> 
          <Route exact path='*' element={<Login/>} /> 
        </Routes>
        <ToastContainer />  
      </UserState>
    </>
  );
};

export default App;
