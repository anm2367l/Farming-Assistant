// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//const firebaseConfig = {
//  apiKey: "AIzaSyA05UwTBVm6mbM58giwQXGMNN8uqL62syo",
//  authDomain: "farming-asisstant.firebaseapp.com",
//  projectId: "farming-asisstant",
//  storageBucket: "farming-asisstant.appspot.com",
//  messagingSenderId: "1051059900107",
//  appId: "1:1051059900107:web:491f84082f6b9f7e65154e"
//};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

//const db = getFirestore(app);

//patron de diseño singleton
class Conexion {
  constructor() {
    //Verifica que exista una unica instacia creada del objeto    
    if(Conexion.instancia) {
      return Conexion.instancia;
    }
    this._firebaseConfig = {
      apiKey: "AIzaSyA05UwTBVm6mbM58giwQXGMNN8uqL62syo",
      authDomain: "farming-asisstant.firebaseapp.com",
      projectId: "farming-asisstant",
      storageBucket: "farming-asisstant.appspot.com",
      messagingSenderId: "1051059900107",
      appId: "1:1051059900107:web:491f84082f6b9f7e65154e"
    };
    this._app = initializeApp(this._firebaseConfig);
    this._db = getFirestore(this._app);

    //guarda la instancia creada si no existe una
    Conexion.instancia = this;
  }

  get db (){
    return this._db;
  }
}

const db = new Conexion();

export default db;

