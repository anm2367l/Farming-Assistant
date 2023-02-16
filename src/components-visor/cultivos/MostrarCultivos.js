import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


//CONTEXT
import UserContext from '../../state/userContext';


const MostrarCultivo = () => {
    const { cultivo } = useContext(UserContext);


    if (cultivo.id === '' & cultivo.nombre === '') {
        return (
            <>

            </>
        );
    } else {
        return (
            <>
                <div className="row border  p-3" id='card-vot'>
                    <div className='col '>
                        {cultivo.actividades.map((act, i) => {
                            
                            return <div  key={i} value={act.id} className="card border-dark p-4">
                                {act.nombre} <br /> {act.estado} <br /> {act.descripcion}
                                <br /> {act.fecha}
                                </div>
                        })}
                    </div>                    
                </div>
            </>
        );
    }
}

export default MostrarCultivo;


//className='card border-dark m-3'