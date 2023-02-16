import React, {useReducer} from "react";
import UserReducer from './userReducer';
import UserContext from "./userContext";


//  import { collection, getDocs } from "firebase/firestore";
//import Candidate from "../votty/candidate";
//import Ballot from "../votty/ballot";

// Components
import user from "../farming-assistant/usuario";
import db from "../firebase/firebaseConfig";
import Cultivo from "../farming-assistant/cultivo";

const UserState = (props) => {
    const initialState = {
        db: db,        
        user: user,
        loggedStatus: false,
        password: '',
        email: '',
        sub_page: 'inicio',
        cultivo: new Cultivo('', '', '', '', '', '', '', ''),
        nombre: '', 
        tipo_cultivo: '', 
        area_sembrada: '', 
        descripcion: '',
    };
    
    const [state, dispatch] = useReducer(UserReducer, initialState);

    const setInitialState = () => {
        //elimina todo lo almacenado en el objeto usuario.
        user.eliminarDatos();
        
        dispatch ({
            type: 'SET_NOMBRE',
            payload: ''
        })
        dispatch ({
            type: 'SET_TIPO_CULTIVO',
            payload: ''
        })
        dispatch ({
            type: 'SET_AREA_SEMBRADA',
            payload: ''
        })
        dispatch ({
            type: 'SET_DESCRIPCION',
            payload: ''
        })
        dispatch ({
            type: 'SET_LOGGEDSTATUS',
            payload: false
        })
        dispatch ({
            type: 'SET_PASSWORD',
            payload: ''
        })
        dispatch ({
            type: 'SET_EMAIL',
            payload: ''
        })
        dispatch ({
            type: 'SET_SUB_PAGE',
            payload: 'inicio'
        })
        dispatch ({
            type: 'SET_CULTIVO',
            payload: new Cultivo('', '', '', '', '', '', '', '')
        })
    }

    const setUser = (user) => {
        dispatch ({
            type: 'SET_USER',
            payload: user 
        })
    }
    const setLoggedStatus = (status) => {
        dispatch ({
            type: 'SET_LOGGEDSTATUS',
            payload: status 
        })
    }
    const setPassword = (status) => {
        dispatch ({
            type: 'SET_PASSWORD',
            payload: status 
        })
    }
    const setEmail = (status) => {
        dispatch ({
            type: 'SET_EMAIL',
            payload: status 
        })
    }

    const setSubPage = (status) => {
        dispatch ({
            type: 'SET_SUB_PAGE',
            payload: status 
        })
    }

    const setCultivo = (status) => {
        dispatch ({
            type: 'SET_CULTIVO',
            payload: status 
        })
    }
    const setNombre = (Nombre) => {
        dispatch ({
            type: 'SET_NOMBRE',
            payload: Nombre 
        })
    }
    const setTipoCultivo = (TipoCultivo) => {
        dispatch ({
            type: 'SET_TIPO_CULTIVO',
            payload: TipoCultivo 
        })
    }
    const setAreaSembrada = (AreaSembrada) => {
        dispatch ({
            type: 'SET_AREA_SEMBRADA',
            payload: AreaSembrada 
        })
    }
    const setDescripcion = (Descripcion) => {
        dispatch ({
            type: 'SET_DESCRIPCION',
            payload: Descripcion 
        })
    }


    return (
        <UserContext.Provider value={{
            db: state.db,
            user: state.user,
            loggedStatus: state.loggedStatus,
            password: state.password,
            email: state.email,
            sub_page: state.sub_page,
            cultivo: state.cultivo,
            nombre: state.Nombre,
            tipo_cultivo: state.tipo_cultivo,
            describe: state.describe,
            area_sembrada: state.area_sembrada,
            
            setInitialState,
            setUser,
            setEmail,
            setLoggedStatus,
            setPassword,
            setSubPage,
            setCultivo,
            setNombre,
            setAreaSembrada,
            setTipoCultivo,
            setDescripcion
        }}>
            {props.children}
        </UserContext.Provider>
    );    
};

export default UserState;











