
class Inventario {
    constructor(nombre, descripcion, elementos) {
        this._nombre = nombre;
        this._descripcion = descripcion;
        this._elementos = elementos;
    }

    get nombre () {
        return this._nombre;
    }
    set nombre (nombre) {
        this._nombre = nombre;
    }
    get descripcion () {
        return this._descripcion;
    }
    set descripcion (descripcion) {
        this._descripcion = descripcion;
    }
    get elementos () {
        return this._elementos;
    }
    set elementos (elementos) {
        this._elementos = elementos;
    }

};

export default Inventario;