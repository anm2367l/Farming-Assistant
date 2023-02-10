import React, { useContext}  from 'react'


import 'react-toastify/dist/ReactToastify.css';
//CONTEXT
import UserContext from '../state/userContext';


const GestionProyectos = () => {
    const { loggedStatus, password} =
        useContext(UserContext);

    console.log(loggedStatus);

    console.log(password);
    return (
        <div>
            <p>Inicio de sesion</p>

        </div>
    )
}

export default GestionProyectos;

