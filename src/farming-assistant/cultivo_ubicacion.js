import DescripcionCultivo from "./descripcion_cultivo";

class CultivoUbicacion extends DescripcionCultivo {
    constructor (nombre, area_sembrada, area_cosechada, rendimiento, produccion, departamento, municipio){
        super(nombre, area_sembrada, area_cosechada, rendimiento, produccion);
        this._departamento = departamento;
        this._municipio = municipio;
    }

    get departamento (){
        return this._departamento;
    }
    set departamento (departamento){
        return this._departamento = departamento;
    }
    get municipio (){
        return this._municipio;
    }
    set municipio (municipio){
        return this._municipio = municipio;
    }

}

export default CultivoUbicacion;