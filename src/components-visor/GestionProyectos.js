import React, { useContext } from 'react'


import 'react-toastify/dist/ReactToastify.css';
//CONTEXT
import UserContext from '../state/userContext';

//COMPONENTES
import Sidebar from './gestion_proyectos_componentes/sidebar';
//CSS
import './css/GestionProyectos.css'


const GestionProyectos = () => {
    const { loggedStatus, password } =
        useContext(UserContext);

    console.log(loggedStatus);

    console.log(password);
    return (
        <div className='container' id='global-gestion-proyectos'>
            <div className='row vw-100 vh-100 border'>
                <div className='col col-3 p-0 border'>
                <Sidebar/>
                </div>
                

                <div className='col col-9 p-0 border '>
                    
                </div>
            </div>

        </div>
    );
};

export default GestionProyectos;


//<li class="mb-1">
//          <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
//            data-bs-target="#home-collapse" aria-expanded="true">
//            Home
//          </button>
//          <div class="collapse show" id="home-collapse">
//            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
//              <li><a href="#" class="link-dark rounded">Overview</a></li>
//              <li><a href="#" class="link-dark rounded">Updates</a></li>
//              <li><a href="#" class="link-dark rounded">Reports</a></li>
//            </ul>
//          </div>
//        </li>


