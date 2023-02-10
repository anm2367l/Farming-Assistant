import React, {useReducer} from "react";
import UserReducer from './userReducer';
import UserContext from "./userContext";


//  import { collection, getDocs } from "firebase/firestore";
//import Candidate from "../votty/candidate";
//import Ballot from "../votty/ballot";

// Components
import user from "../farming-assistant/usuario";
import Usuario from "../farming-assistant/usuario";
import db from "../firebase/firebaseConfig";

const UserState = (props) => {
    const initialState = {
        db: db,        
        user: user,
        loggedStatus: false,
        password: '',
        email: '',
    };
    
    const [state, dispatch] = useReducer(UserReducer, initialState);

    const setInitialState = () => {
        dispatch ({
            type: 'SET_USER',
            payload: new Usuario(db)
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


    return (
        <UserContext.Provider value={{
            db: state.db,
            user: state.user,
            loggedStatus: state.loggedStatus,
            password: state.password,
            email: state.email,
            setInitialState,
            setUser,
            setEmail,
            setLoggedStatus,
            setPassword,
        }}>
            {props.children}
        </UserContext.Provider>
    );    
};

export default UserState;











