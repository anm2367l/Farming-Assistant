import React, {useReducer} from "react";
import UserReducer from './userReducer';
import UserContext from "./userContext";
//import Votter from "../votty/voter";
import db from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
//import Candidate from "../votty/candidate";
//import Ballot from "../votty/ballot";

const UserState = (props) => {
    const initialState = {
        db: db,
        
        user: new Votter(db),
        candidates: [],
        loggedStatus: false,
        password: '',
        cedula: '',
        candidate: new Candidate('', '', ''),
        ballot: new Ballot(),
        estado: true
    };
    
    const [state, dispatch] = useReducer(UserReducer, initialState);

    const setInitialState = () => {

    }


    return (
        <UserContext.Provider value={{
            
        }}>
            {props.children}
        </UserContext.Provider>
    );    
};

export default UserState;











