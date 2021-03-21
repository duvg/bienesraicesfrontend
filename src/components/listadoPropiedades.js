import React, { useEffect, useState } from 'react';

// Plugins
import { css } from '@emotion/react';
import styled from '@emotion/styled';

// Hooks
import usePropiedades from '../hooks/usePropiedades';
import useFiltro from '../hooks/useFiltro';

// Components
import PropiedadPreview from './propiedadPreview';

// Css Modules
import * as listadoPropiedadesCSS from '../css/listadoPropiedades.module.css';

// Styled components
const SinPropiedades = styled.p`
    width: 100%;
    max-width: 1200px;
    margin: 2rem auto;
    font-weight: 700;
    text-align: center;
    color: #FFF;
    display: block;
    background-color: #FC5454;
`;

const ListadoPropiedades = () => {

    const resultado = usePropiedades();
    const [propiedades] = useState(resultado);
    const [filtradas, setFiltradas] = useState([]);

    // Filtrado de propiedades
    const { categoria, FiltroUI } = useFiltro();

    
    
    useEffect(() => {
        if(categoria) {
            const filtro = propiedades.filter( propiedad => propiedad.categoria.nombre === categoria);
            setFiltradas(filtro);
        } else {
            setFiltradas(propiedades);
        }
        
    }, [categoria, propiedades]);

    return (
        <> 
            <h2
                css={css`
                    margin-top: 5rem;
                `}
            >Listado de propiedades</h2>

            { FiltroUI()}
            
            { filtradas.length ? 
                <ul className={listadoPropiedadesCSS.propiedades}>

                    {filtradas.map(propiedad => (
                        <PropiedadPreview
                            key={propiedad.id}
                            propiedad={propiedad}
                        />
                    ))}
                </ul>
                :
                <SinPropiedades>No hay propiedades en esta categoria</SinPropiedades>
            }
                
            
            
        </>
    
        );
}
 
export default ListadoPropiedades;