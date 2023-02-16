import React, { useContext, useEffect } from 'react'


import 'react-toastify/dist/ReactToastify.css';

//CONTEXT
//import UserContext from '../state/userContext';

//COMPONENTES
import Sidebar from './interface_proyectos_componentes/Sidebar';
import Escritorio from './interface_proyectos_componentes/Escritorio';
import UserContext from "../state/userContext";
//CSS
import './css/InterfaceProyectos.css'


const InterfaceProyectos = () => {
    //captura los datos almacenados en los inputs
    const { loggedStatus, user, setInitialState } =
        useContext(UserContext);


//    useEffect(() => {
//        if (user.cultivos_cargados) {
//            console.log('Se obtuvieron los cultivos :3');
//            user.getActividades();
//        }
//
//
//    }, [user.cultivos_cargados]);




    return (
        <div className='container' >
            <div className='row vw-100 vh-100 '>
                <div className='col col-2 p-0 ' id='interfaceGestionProyecto-navegacion'>
                    <Sidebar />
                </div>

                <div className='col col-10 p-0 ' >
                    <Escritorio />
                </div>
            </div>

        </div>
    );
};

export default InterfaceProyectos;



