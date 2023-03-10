import React, { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './css/Login.css'

//COMPONENTES
import InterfaceProyectos from "./InterfaceProyectos";

//CONTEXT
import UserContext from "../state/userContext";


const Login = () => {
  const { loggedStatus, user, setLoggedStatus, setInitialState, setPassword, setEmail, password, email } =
    useContext(UserContext);

  const navigate = useNavigate();

  //console.log(user);


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
    };
    if (name === 'email') {
      setEmail(value);
      //console.log(value);
    }
  };

  useEffect(() => {
    if (loggedStatus) {
      user.getCultivos();
      navigate('/InterfaceProyectos');      
    } else {
      setInitialState();
    };


  }, [loggedStatus]);
  //container p-3 align-items-center justify-content-center vh-100 vw-100 
  //text-center border bg-light rounded-3
  //modifica los cambios al ingresar los datos cedula y contraseña
  return (
    <div className="row ms-5 ps-5 pe-5 mt-5  justify-content-md-center" id="login-div-login">

      <div className="border col-sm text-center border-2 border-dark bg-light rounded-3">
        <main className="form-signin  mt-3 mb-1 me-5 ms-5">
          <form onSubmit={handleSumit} className='text-center'>

            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-black text-decoration-none">
              <img className='rounded-circle w-25'
                src="https://docs.google.com/uc?export=download&id=1-EC2U4SLh388Lwe6JudAfLpmeJB2Q6JG" alt="" />
              <span className="fs-4 p-2">Farming Assistant</span>
            </a>
            <br />
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
    </div>
  );
};

export default Login;
