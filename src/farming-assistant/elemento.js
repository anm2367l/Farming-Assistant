import Descripcion from "./descripcion";

class Elemento extends Descripcion{
    constructor(id, cantidad_usada, cantidad_faltante, nombre, descripcion, fecha, valor, cantidad) {
        super(nombre, descripcion, fecha, valor, cantidad)
        this._cantidad_usada = cantidad_usada;
        this._cantidad_faltante = cantidad_faltante;
        this._id = id;
    }
    get cantidad_usada (){
        return this._cantidad_usada;
    }
    set cantidad_usada(cantidad_usada) {
        this._cantidad_usada = cantidad_usada;
    }
    get cantidad_faltante (){
        return this._cantidad_faltante;
    }
    set cantidad_faltante(cantidad_faltante) {
        this._cantidad_faltante = cantidad_faltante;
    }
    get id (){
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
}