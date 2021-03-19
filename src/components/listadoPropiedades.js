import React, { useEffect, useState } from 'react';

// Plugins
import { css } from '@emotion/react';

// Hooks
import usePropiedades from '../hooks/usePropiedades';

// Components
import PropiedadPreview from './propiedadPreview';

// Css Modules
import * as listadoPropiedadesCSS from '../css/listadoPropiedades.module.css';


const ListadoPropiedades = () => {

    const resultado = usePropiedades();
    const [propiedades, setPropiedades] = useState([]);
    console.log(resultado);
    useEffect(() => {
        setPropiedades(resultado);
    }, []);

    return (
        <> 
            <h2
                css={css`
                    margin-top: 5rem;
                `}
            >Listado de propiedades</h2>

            <ul className={listadoPropiedadesCSS.propiedades}>
                {propiedades.map(propiedad => (
                    <PropiedadPreview
                        key={propiedad.id}
                        propiedad={propiedad}
                    />
                ))}
            </ul>
        </>
    
        );
}
 
export default ListadoPropiedades;