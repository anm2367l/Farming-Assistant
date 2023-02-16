import React, { useContext, useEffect } from 'react';

import UserContext from '../../state/userContext';
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {

    const { setSubPage, setLoggedStatus, setInitialState, loggedStatus } =
        useContext(UserContext);

    const navigate = useNavigate();

    const goToPage = (e) => {
        const { name, value } = e.target;
        if (name === 'inicio') {
            setSubPage(name);
            //console.log(sub_page);
        };
        if (name === 'cultivos') {
            setSubPage(name);
            //console.log(sub_page);
        };
        if (name === 'inventario') {
            setSubPage(name);
            //console.log(sub_page);
        };
        if (name === 'salir') {
            //console.log(name);
            setLoggedStatus(false);
            setInitialState();
            navigate('/');
            //setSubPage(name);
            //console.log(sub_page);
        };

    };

    useEffect(() => {
        if (loggedStatus) {
          navigate('/InterfaceProyectos');
        };    
    
      }, [loggedStatus]);


    return (
        <div className='col col-4 d-flex flex-column vh-100 w-100 flex-shrink-0 p-3 text-white bg-dark' id=''>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <img className='rounded-circle w-25'
                    src="https://docs.google.com/uc?export=download&id=1-EC2U4SLh388Lwe6JudAfLpmeJB2Q6JG" alt="" />
                <span className="fs-4 p-2">Farming Assistant</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto ">

                <li className="nav-item mt-1 mb-1">
                    <button className="btn btn-dark ms-4 align-items-end text-white rounded"
                        name="inicio"
                        onClick={goToPage}>
                        Inicio
                    </button>

                </li>
                <li className="nav-item mt-1 mb-1">
                    <button className="btn btn-dark ms-4 align-items-center text-white rounded"
                        name="cultivos"
                        onClick={goToPage}>
                        Cultivos
                    </button>
                </li>
                <li className="nav-item mt-1 mb-1">
                    <button className="btn btn-dark ms-4 align-items-center text-white rounded"
                        name="inventario"
                        onClick={goToPage}>
                        Inventario
                    </button>
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://docs.google.com/uc?export=download&id=1-EC2U4SLh388Lwe6JudAfLpmeJB2Q6JG"
                        alt=""
                        width="32"
                        height="32"
                        className="rounded-circle me-2" />
                    <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" name='salir' onClick={goToPage} href="#">
                        Cerrar Sesion
                    </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;

