class Descripcion {
    constructor(nombre, descripcion, fecha, valor, cantidad){
        this._nombre = nombre;
        this._descripcioin = descripcion;
        this._fecha = fecha;
        this._valor = valor;
        this._cantidad = cantidad;
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
    get valor (){
        return this._valor;
    }
    set valor(valor) {
        this._valor = valor;
    }
    get cantidad (){
        return this._cantidad;
    }
    set cantidad(cantidad) {
        this._cantidad = cantidad;
    }
};

export default Descripcion;