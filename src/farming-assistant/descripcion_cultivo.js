

class DescripcionCultivo {
    constructor(nombre, area_sembrada, area_cosechada, rendimiento, produccion){
        this._nombre = nombre;
        this._area_sembrada = area_sembrada;
        this._area_cosechada = area_cosechada;
        this._rendimiento = rendimiento;
        this._produccion = produccion;
    }
    get nombre (){
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }

    get area_sembrada (){
        return this._area_sembrada;
    }
    set area_sembrada(area_sembrada) {
        this._area_sembrada = area_sembrada;
    }

    get area_cosechada (){
        return this._area_cosecha;
    }
    set area_cosechada(area_cosecha) {
        this._area_cosecha = area_cosecha;
    }

    get rendimiento (){
        return this._rendimiento;
    }
    set rendimiento(rendimiento) {
        this._rendimiento = rendimiento;
    }
    
    get produccion (){
        return this._produccion;
    }
    set produccion(produccion) {
        this._produccion = produccion;
    }
};

export default DescripcionCultivo;