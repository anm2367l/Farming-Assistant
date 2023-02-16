import db from "../firebase/firebaseConfig";

import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

//CLASESS USADAS
import Cultivo from './cultivo'

class Usuario {
  constructor() {
    if (Usuario.instancia) {
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

    this._cultivos_cargados = false;

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

  get email() {
    return this._email;
  }

  get autenticado() {
    return this._autenticado;
  }

  get inventarios() {
    return this._inventarios;
  }

  get contabilidad() {
    return this._contabilidad;
  }

  get tipo_usuario() {
    return this._tipo_usuario;
  }

  get cultivos() {
    return this._cultivos;
  }

  get cultivos_cargados() {
    return this._cultivos_cargados;
  }

  set autenticado(autenticado) {
    this._autenticado = autenticado;
  }

  set inventarios(inventario) {
    this._inventarios.push(inventario);
  }

  set cultivos(cultivo) {
    this._cultivos.push(cultivo);
  }

  setData(email, password) {
    this._email = email;
    this._password = password;
    //console.log(this._password);
  }

  eliminarDatos() {
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
  }

  getCultivos = async () => {
    //console.log(this._id)
    const q = query(
      collection(this._db.db, "cultivo"),
      where("id_usuario", "==", String(this._id))
    );
    const docSnap = await getDocs(q);

    //nombre, area_sembrada, area_cosechada, rendimiento, produccion, tipo_cultivo, id
    //const docSnap = await getDocs(collection(this._db.db, "cultivo"));

    let list_cultivos = [];
    docSnap.forEach((doc) => {
      list_cultivos.push(new Cultivo(
        doc.data().nombre,
        doc.data().area_siembra,
        doc.data().area_cocechada,
        doc.data().rendimiento,
        doc.data().produccion,
        doc.data().tipo_cultivo,
        doc.data().descripcion,
        doc.id
      ));
    });

    this._cultivos = list_cultivos;
    if (this._cultivos.length > 0) {
      console.log(list_cultivos);
      this.getActividades();      
      this._cultivos_cargados = true;
    }
    
    //return list_candidates;
  }

  getActividades = async () => {
    const q = query(
      collection(this._db.db, "actividades"),
      where("id_usuario", "==", String(this._id))
    );
    const docSnap = await getDocs(q);

    const list_actividades = [];
    docSnap.forEach((doc) => {
      list_actividades.push([
        doc.data().nombre,
        doc.data().descripcion,
        doc.data().fecha_creacion,
        doc.data().estado, 
        doc.id,       
        doc.data().id_cultivo        
      ]);
    });

    while (list_actividades.length > 0) {
      let actividad = list_actividades.shift();
      console.log(actividad);
      for (let j = 0; j < this._cultivos.length; j++) {
        let b = this._cultivos[j].añadirActividades(actividad[0], actividad[1], actividad[2], actividad[3], actividad[4], actividad[5]);
        if (b) {
          break
        };
      };
    };
    console.log('Actividades')
    console.log(this._cultivos[0].actividades);

    //return list_candidates;
  }

  //const docRef1 = await addDoc(collection(db, "votty-bpoll"), {hash: hash, vote: encrypt});
  nuevoCultivo = async (nombre, area_siembra, area_cocechada, rendimiento, produccion, tipo_cultivo, descripcion) => {
    this._cultivos.push(new Cultivo(
      nombre,
      area_siembra,
      area_cocechada,
      rendimiento,
      produccion,
      tipo_cultivo,
      descripcion
    ))

    const docRef1 = await addDoc(
      collection(this._db.db, "cultivo"), {
      nombre: nombre,
      area_siembra: area_siembra,
      area_cocechada: area_cocechada,
      rendimiento: rendimiento,
      produccion: produccion,
      tipo_cultivo: tipo_cultivo,
      descripcion: descripcion});

    return(true)
  }

  //Autentica al usuario, comprobando que los datos enviados coincidan
  //devuelve true e inicializa los demas campos de la clase, de lo contrario
  //no realiza cambios

  autenticar = async () => {
    const q = query(
      collection(this._db.db
        , "usuarios"),
      where("email", "==", String(this._email))
    );
    const docSnap = await getDocs(q);

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
    if (list_usuario.length === 1) {
      if (list_usuario[0][1] === String(this._password)) {
        this._nombre = list_usuario[0][2];
        this._telefono = list_usuario[0][3];
        this._autenticado = true;
        this._tipo_usuario = list_usuario[0][4];
        this._id = list_usuario[0][5];
        return this._autenticado;
      } else {
        return false;
      }
    }
  };
};



const user = new Usuario();


export default user;

















//const user2 = new Usuario();

//console.log('instancia unica de usuario: ',user === user2)




