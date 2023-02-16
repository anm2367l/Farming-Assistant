import React, { useContext, useEffect } from 'react';

import UserContext from '../../state/userContext';

//COMPONENETES
import Inicio from './Inicio';
import NuevoCultivo from '../cultivos/NuevoCultivo';
import NuevoInventario from '../inventario/NuevoInventario';
import Cultivos from '../Cultivos';

const Escritorio = () => {
    const { sub_page } =
        useContext(UserContext);

    if (sub_page === 'inicio') {
        return (
            <>
                <Inicio />
            </>
        )
    };
    if (sub_page === 'cultivos') {
        return (
            <>
                <Cultivos/>
            </>
        )
    };
    if (sub_page === 'inventario') {
        return (
            <>
                <p>Inventario</p>
            </>
        )
    };
    if (sub_page === 'nuevo-cultivo') {
        return (
            <>
                <NuevoCultivo />
            </>
        )
    };
    if (sub_page === 'nuevo-inventario') {
        return (
            <>
                <NuevoInventario />
            </>
        )
    };
}


export default Escritorio
