
import './App.css';
import React from 'react';

import {
  Routes,
  Route
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//CONTEXT
import UserState from './state/userState';

//COMPONENTES
import InterfaceProyectos from './components-visor/InterfaceProyectos';
import Login from './components-visor/Login';
import NuevoCultivo from './components-visor/cultivos/NuevoCultivo';
import NuevoInventario from './components-visor/inventario/NuevoInventario';
import Cultivos from './components-visor/Cultivos';


//background-image: url('https://cdn.wallpapersafari.com/36/94/wdEIfK.jpg');

const App = () => {
  return (
    <>
      <UserState>      
        <Routes>
          <Route index path='/' element={<Login/>}/> 
          <Route index path='/InterfaceProyectos' element={<InterfaceProyectos/>}/> 
          <Route index path='/Cultivos' element={<Cultivos/>}/>
          <Route index path='/Cultivos/NuevoCultivo' element={<NuevoCultivo/>}/>
          <Route index path='/Inventario/NuevoInventario' element={<NuevoInventario/>}/> 
          <Route exact path='*' element={<Login/>} /> 
        </Routes>
        <ToastContainer />  
      </UserState>
    </>
  );
};

export default App;
