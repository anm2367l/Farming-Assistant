import React, { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './css/Login.css'

//COMPONENTES


//CONTEXT
import UserContext from "../state/userContext";


const Login = () => {
  const { loggedStatus, estado, user, setLoggedStatus, setPassword, setEmail, password, email } =
    useContext(UserContext);

  const navigate = useNavigate();




  //Se ejecuta cuando se activa el evento del botton, se aplica al formulario
  const handleSumit = async (e) => {
    e.preventDefault();

    //console.log('correo: ', email);
    //console.log('pasword: ', password);

    user.setData(email, password);

    const ls = await user.autenticar();
    setLoggedStatus(ls);
    setPassword('');
    //if (loggedStatus) {
    //  setPassword('');
    //} else {
    //  setPassword('');
    //}
  }

  //captura los datos almacenados en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'password') {
      setPassword(value);
      //console.log(value);
    }
    if (name === 'email') {
      setEmail(value);
      //console.log(value);
    }
  };

  useEffect(() => {
    if (loggedStatus) {
      navigate('/GestionProyectos');
    }


  }, [loggedStatus, estado]);

  //modifica los cambios al ingresar los datos cedula y contraseña
  return (
    <div className="text-center border bg-light rounded-3 " id="login-div-login">
      <main className="form-signin mt-3 mb-1 me-5 ms-5">
        <form onSubmit={handleSumit} className='text-center'>
          <img
            className="mb-4 center"
            src="https://docs.google.com/uc?export=download&id=1K75xLK6LzMSvMvcvDRVtABqRz8AwgEb9"
            alt=""
            width="50%"
            height="50%"
          />
          <p className="fs-3 text-start fw-normal mb-1">
            Farming Assistant <br />
          </p>
          <p className="fs-6 text-start fw-light">  Bienvenido, ingrese sus datos</p>
          <div className="form-floating">
            <input
              name="email"
              type="text"
              className="form-control"
              id="email-id"
              placeholder="@Email"
              onChange={handleInputChange}
              value={email}
            />
            <label htmlFor="correo-id"><p className="font-monospace">Correo electronico</p></label>
          </div>
          <div className="form-floating">
            <input
              name="password"
              type="password"
              className="form-control"
              id="contraseña-id"
              placeholder="Contraseña"
              onChange={handleInputChange}
              value={password}
            />
            <label htmlFor="contraseña-id"><p className="font-monospace">Contraseña</p></label>
          </div>
          <div className="row pt-3">
            <div className="col">
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Ingersar
              </button>
            </div>
          </div>
          <div className="mt-1 bg-body rounded-3">
            <img
              className="mt-3 center"
              src="https://docs.google.com/uc?export=download&id=1K75xLK6LzMSvMvcvDRVtABqRz8AwgEb9"
              alt=""
              width="40%"
              height="40%"
            />
            <p className=" mb-3 fs-6  fw-light">
              &copy; Universidad Industrial de Santander <br />
              Ingenieria de Sistemas <br />
              2023
            </p>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Login;
