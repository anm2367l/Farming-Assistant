import Descripcion from "./descripcion";

class Costo extends Descripcion {
    constructor(id_elemento, nombre, descripcion, fecha, valor, cantidad){
        super(nombre, descripcion, fecha, valor, cantidad);
        this._id_elemento = id_elemento;
    }

    get id_elemento (){
        return this._id_elemento;
    }
    set id_elemento(id_elemento) {
        this._id_elemento = id_elemento;
    }
};

export default Costo;