import React, { useContext, useEffect } from 'react'
import UserContext from '../state/userContext';
import { useNavigate } from 'react-router-dom';

import MostrarCultivo from './cultivos/MostrarCultivos';


const Cultivos = () => {
  const { user, cultivo, setCultivo } =
    useContext(UserContext);

  const selecCultivo = (e) => {    
    const { key, value } = e.target;
    for (let i = 0; i < user.cultivos.length; i++) {
      if (value === user.cultivos[i].id) {
        setCultivo(user.cultivos[i]);
      };
    }
  }

  return (
    <div className='container border-danger  h-100 border '>
      <div className='row border pt-4 h-100'>

        <div className='col-2 border '>

          <div className='row'>
            <div className="input-group mt-1 p-1 input-group-sm">
              <span className="input-group-text">Buscar</span>
              <input type="text" className="form-control" />
            </div>
          </div>
          <hr />
          <div className='d-grid gap-2 col mx-auto '>
            {user.cultivos.map((cul, i) => {
              return <button type="button " onClick={selecCultivo} key={i} value={cul.id} className="btn text-dark m-2">{cul.nombre}</button>
            })}
          </div>
        </div>
        <div className='col-8 border'>

          <MostrarCultivo/>

        </div>
        <div className='col-2 border'></div>

      </div>
    </div>
  )
}

export default Cultivos


//  < div className = "input-group mb-3 input-group-sm" >
//            <span className="input-group-text">Buscar</span>
//            <input type="text" className="form-control" />
//          </div >
//        </div >
//  <div className='row'>
//    <div className='col' id='col1-cand'>
//      <div className='btn-group-vertical'>
//        {candidates.map((cand, i) => {
//          return <button type="button " onClick={selectCandidate} key={i} value={cand.name} className="btn text-dark">{cand.name}</button>
//        })}
//      </div>
//    </div>












