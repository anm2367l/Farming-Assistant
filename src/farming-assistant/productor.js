import Usuario from "./Usuario";

class Productor extends Usuario {
    constructor () {
        this._inventarios = [];
        this._actividades = [];
        this._contabilidad = "Objeto contabilidad";
    }

    set inventarios (inventario) {
        this._inventarios.push(inventario);
    }
    get inventarios () {
        return this._inventarios;
    }

    set actividades (actividad) {
        this._actividades.push(actividad);
    }
    get actividades () {
        return this._actividades;
    }

    get contabilidad () {
        return this._contabilidad;
    }

        
}


export default Productor;