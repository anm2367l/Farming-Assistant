import db from "../firebase/firebaseConfig";

import { collection, getDocs, query, where } from "firebase/firestore";

class Usuario {
  constructor() {
    if(Usuario.instancia) {
      return Usuario.instancia;
    }
    this._id = '';
    this._nombre = '';
    this._email = '';
    this._password = '';
    this._telefono = '';
    this._tipo_usuario = '';
    this._autenticado = false;
    this._inventarios = [];
    this._cultivos = [];
    this._contabilidad = "Objeto contabilidad";
    this._db = db;
    Usuario.instancia = this;
  }

  get db() {
    return this._db;
  }

  get id() {
    return this._id;
  }

  get nombre() {
    return this._nombre;
  }

  get correo() {
    return this._email;
  }

  get autenticado() {
    return this._autenticado;
  }

  set inventarios(inventario) {
    this._inventarios.push(inventario);
  }

  get inventarios() {
    return this._inventarios;
  }

  get contabilidad() {
    return this._contabilidad;
  }

  get contabilidad() {
    return this._telefono;
  }

  get tipo_usuario() {
    return this._tipo_usuario;
  }

  setData(email, password) {
    this._email = email;
    this._password = password;
    //console.log(this._password);
  }


  //Autentica al usuario, comprobando que los datos enviados coincidan
  //devuelve true e inicializa los demas campos de la clase, de lo contrario
  //no realiza cambios

  autenticar = async () => {
    //console.log('haciendo consultacon: correo= ', this._email, ' contraseña= ', this._password);
    const q = query(
      collection(this._db.db
        , "usuarios"),
      where("email", "==", String(this._email))
    );
    const docSnap = await getDocs(q);

    //const docRef = doc(this._db, "usuarios", "1");
    //const docSnap = await getDoc(docRef);

    //console.log('docSnap: ',docSnap.exists() );
    //console.log('docSnap: ',docSnap.data() );

    //console.log('docSnap: ',docSnap);

    const list_usuario = [];
    docSnap.forEach((doc) => {
      list_usuario.push([
        doc.data().email,
        doc.data().password,
        doc.data().nombre,
        doc.data().telefono,
        doc.data().tipo_usuario,
        doc.id
      ]);
    });
    //console.log('datos usuario: ', list_usuario)
    if (list_usuario.length === 1) {
      //console.log('tiene un registro!!');
      if (list_usuario[0][1] === String(this._password)) {
        this._nombre = list_usuario[0][2];
        this._telefono = list_usuario[0][3];
        this._autenticado = true;
        this._tipo_usuario = list_usuario[0][4];
        this._id = list_usuario[0][5];
        //console.log(this._email);
        //console.log(this._password);
        //console.log(this._nombre);
        //console.log(this._tipo_usuario);
        //console.log(this._telefono);
        //console.log(this._id);
        return this._autenticado;
      } else {

        return false;
      }
    }
  };
};

const user = new Usuario();
//const user2 = new Usuario();

//console.log('instancia unica de usuario: ',user === user2)

export default user;




