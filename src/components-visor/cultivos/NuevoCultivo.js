import React, { useContext, useEffect } from 'react'
import UserContext from '../../state/userContext';
import { useNavigate } from 'react-router-dom';


const NuevoCultivo = () => {
  const { user, cultivo, setSubPage, nombre, tipo_cultivo, area_sembrada, descripcion, setNombre, setTipoCultivo, setDescripcion, setAreaSembrada } =
    useContext(UserContext);



  const handleSumit = (e) => {
    //e.preventDefault();
    console.log(nombre);
    //user.setData(email, password);

    //const ls = await user.autenticar();


  }

  //captura los datos almacenados en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'nombre') {
      setNombre(value);
      //setPassword(value);
      console.log(value);
    };
    if (name === 'tipo-cultivo') {
      setTipoCultivo(value);
      //setEmail(value);
      console.log(value);
    };
    if (name === 'area-sembrada') {
      setAreaSembrada(value);
      //setPassword(value);
      console.log(value);
    };
    if (name === 'descripcion') {
      setDescripcion(value);
      //setPassword(value);
      console.log('descripcion: ', descripcion);
    };
  };

  const handle = (e) => {
    const { name, value } = e.target;
    console.log(name);
    if (name === 'inicio') {
      //setPassword(name);
      //navigate('/InterfaceProyectos');
      setSubPage(name);
      console.log(name);
    }
    if (name === 'crear-cultivo') {
      //setEmail(name);
      setSubPage(name);
      console.log(name);
    }
  };

  return (
    <div className='container border-danger h-100 border ' id='inicio-container'>
      <div className='row border border-2 border-dark bg-light  rounded' id='nuevo-cultivo'>
        <div className='col border pt-3 pb-3 m-3 rounded'>
          

              <p className='fs-3 text-center'>Nuevo Cultivo</p>

              <label className="form-label"> Nombre de la Siembra</label>

              <div className="form-floating mb-3">
                <input type="text" className="form-control" name='nombre' onChange={handleInputChange} id="floatingInput" placeholder="name@example.com" />
                <label >Siembra Mayo @Ejemplo</label>
              </div>



              <label className="form-label"> Tipo de Cultivo</label>

              <div className="form-floating mb-3">
                <input type="" className="form-control" id="floatingInput" name='tipo-cultivo' onChange={handleInputChange} placeholder="name@example.com" />
                <label >Tipo Cultivo</label>
              </div>
              <label className="form-label"> Area Sembrada</label>
              <div className="form-floating mb-3">
                <input type="" className="form-control" id="floatingInput" name='area-sembrada' onChange={handleInputChange} placeholder="name@example.com" />
                <label >Area Sembrada</label>
              </div>

              <div className="mb-3">
                <label className="form-label">Descripcion</label>
                <textarea className="form-control" name='descripcion' onChange={handleInputChange} id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>

              <div className='row'>

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
                    onClick={handleSumit}
                    name='crear-cultivo'
                    type="submit"
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

export default NuevoCultivo;


//<div className="form-floating mb-3">
//            <select className="form-select" id="floatingSelect" name='tipo-cultivo' value={tipo_cultivo} onClick={handleInputChange} >
//              <option selected>Seleccione un tipo de cultivo</option>
//              <option value="AGUACATE">Aguacate</option>
//              <option value="ARROZ">Arroz</option>
//              <option value="SOYA">Soya</option>
//            </select>
//            <label >Lista de cultivos en Colombia</label>
//          </div>
