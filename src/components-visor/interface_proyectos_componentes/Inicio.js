import React, { useContext } from 'react'
import UserContext from '../../state/userContext';
import { useNavigate } from 'react-router-dom';

const Inicio = () => {

    const { setSubPage, sub_page } =
        useContext(UserContext);

    const navigate = useNavigate();

    const handle = (e) => {
        const { name, value } = e.target;
        console.log(name);
        if (name === 'nuevo-cultivo') {
            //setPassword(name);
            //navigate('/InterfaceProyectos');
            setSubPage(name);
            //console.log(name);
        }
        if (name === 'nuevo-inventario') {
            //setEmail(name);
            setSubPage(name);
            //console.log(name);
        }
    };


    return (
        <div className='container border-danger h-100 border ' id='inicio-container'>
            <div className='row border text-center border-2 border-dark  pt-3 rounded' id='inicio-interface'>
                <div className='col  h-100'>
                    <div className='card justify-content-md-center border-dark m-3 pt-2'>
                        <p className='fs-4 ms-3  text-start'>Bienvenido</p>
                    </div>
                    <div className='card border-dark m-3'>
                        <p className='fs-4 mb-0'>Agregar un nuevo cultivo</p>
                        <hr />
                        <div className='row'>
                            <div className='col-5 '></div>
                            <div className='col-2  p-0'>
                                <button
                                    name='nuevo-cultivo'
                                    type="submit"
                                    className="btn btn-outline-dark mb-2 mt-0 pb-2"
                                    onClick={handle}>
                                    Agregar
                                </button>
                            </div>
                            <div className='col-5 '></div>
                        </div>
                    </div>

                    <div className='card border-dark  m-3'>
                        <p className='fs-4 mb-0'>Agregar un nuevo inventario</p>
                        <hr />
                        <div className='row'>
                            <div className='col-5 '></div>
                            <div className='col-2  p-0'>
                                <button
                                    name='nuevo-inventario'
                                    type="submit"
                                    className="btn btn-outline-dark mb-2 mt-0 pb-2"
                                    onClick={handle}>
                                    Agregar
                                </button>
                            </div>
                            <div className='col-5'></div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Inicio
