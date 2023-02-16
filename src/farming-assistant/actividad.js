import Costo from './costo';

class Actividad {
    constructor(nombre, descripcion, fecha, estado, id) {
        this._id = id;
        this._nombre = nombre;
        this._descripcion = descripcion;
        this._fecha = fecha;
        this._estado = estado;
        this._costos = [];
    }

    get id (){
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get nombre (){
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get descripcion (){
        return this._descripcion;
    }
    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }
    get fecha (){
        return this._fecha;
    }
    set fecha(fecha) {
        this._fecha = fecha;
    }
    get estado (){
        return this._estado;
    }
    set estado(estado) {
        this._estado = estado;
    }
    get costos (){
        return this._costos;
    }
    set costos(costos) {
        this._costos = costos;
    }


};

export default Actividad;