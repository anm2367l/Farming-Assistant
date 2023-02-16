import DescripcionCultivo from "./descripcion_cultivo";

//import { collection, getDocs, query, where } from "firebase/firestore";

import Actividad from './actividad';

class Cultivo extends DescripcionCultivo {
    constructor(nombre, area_sembrada, area_cosechada, rendimiento, produccion, tipo_cultivo, descripcion, id) {
        super(nombre, area_sembrada, area_cosechada, rendimiento, produccion)
        this._id = id;
        this._tipo_cultivo = tipo_cultivo;
        this._actividades = [];
        this._descripcion = descripcion;
    }

    get tipo_cultivo() {
        return this._tipo_cultivo;
    }    
    get actividades() {
        return this._actividades;
    }
    get id() {
        return this._id;
    }
    get descripcion() {
        return this._descripcion;
    }


    set tipo_cultivo(tipo_cultivo) {
        this._tipo_cultivo = tipo_cultivo;
    }
    
    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }
    
    

    añadirActividades (nombre, descripcion, fecha, estado, id_actividad, id_cultivo) {
        if(id_cultivo === this._id){
            let actividad = new Actividad(nombre, descripcion, fecha, estado, id_actividad);
            this._actividades.push(actividad);
            return(true);
        } else {
            return(false);
        }
        
    }


};

export default Cultivo;