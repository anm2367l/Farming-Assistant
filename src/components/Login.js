import React, { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import db from "../firebase/firebaseConfig";


const Login = () => {
  console.log(db)
  const navigate = useNavigate();
  return (
    <div>
        <p>
          Hola mundo
        </p>
    </div>
  )
};

export default Login;
