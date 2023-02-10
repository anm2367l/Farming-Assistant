import DescripcionCultivo from "./descripcion_cultivo";

class Cultivo extends DescripcionCultivo {
    constructor(nombre, area_sembrada, area_cosechada, rendimiento, produccion, tipo_cultivo, actividades) {
        super(nombre, area_sembrada, area_cosechada, rendimiento, produccion)
        this._tipo_cultivo = tipo_cultivo;        
        this._actividades = actividades;
    }

    get tipo_cultivo (){
        return this._tipo_cultivo;
    }
    set tipo_cultivo(tipo_cultivo) {
        this._tipo_cultivo = tipo_cultivo;
    }
    get actividades (){
        return this._actividades;
    }
    set actividades(actividades) {
        this._actividades = actividades;
    }


};

export default Cultivo;