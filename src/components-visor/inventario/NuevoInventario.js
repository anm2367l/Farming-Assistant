import React, { useContext, useEffect } from 'react'
import UserContext from '../../state/userContext';
import { useNavigate } from 'react-router-dom';

//import '../css/InterfaceProyectos.css'

const NuevoInventario = () => {
    const { setSubPage, sub_page } =
        useContext(UserContext);

    const navigate = useNavigate();

    const handle = (e) => {
        const { name, value } = e.target;
        console.log(name);
        if (name === 'inicio') {
            //setPassword(name);
            //navigate('/InterfaceProyectos');
            setSubPage(name);
            console.log(name);
        }
        if (name === 'crear-inventario') {
            //setEmail(name);
            //setSubPage(name);
            console.log(name);
        }
    };

    return (
        <div className='container border-danger h-100 border ' id='nuevo-inventario-container'>
            <div className='row border border-2 border-dark bg-light  rounded' id='nuevo-cultivo'>
                <div className='col border pt-3 pb-3 m-3 rounded'>

                    <p className='fs-3 text-center'>Nuevo Inventario</p>

                    <label for="exampleFormControlInput1" class="form-label"> Nombre del Inventario</label>
                    <div class="form-floating mb-3">
                        <input type="" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Recursos @Ejemplo</label>
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Descripcion</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <br />
                    <div className='row '>

                        <div className='col-4'></div>
                        <div className='col-2 p-0'>
                            <button
                                onClick={handle}
                                name='inicio'
                                type="button"
                                className="btn btn-outline-danger w-100"
                            >
                                Cancelar
                            </button>
                        </div>
                        <div className='col-2 p-0'>
                            <button
                                onClick={handle}
                                name='crear-inventario'
                                type="button"
                                className="btn btn-outline-dark w-100"
                            >
                                Crear
                            </button>
                        </div>
                        <div className='col-4'></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuevoInventario
