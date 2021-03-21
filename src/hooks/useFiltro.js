import React, { useState } from 'react';

// Plugins
import { graphql, useStaticQuery} from 'gatsby';
import styled from '@emotion/styled';

const Formulario = styled.form`
    width: 100%;
    max-width: 1200px;
    margin: 2rem auto 0 auto;
    display: flex;

    border: 1px solid #E1E1E1;
`;

const Select= styled.select`
    flex: 1;
    padding: 1rem;
    appearance: none;
    border: none;
    font-family: 'Lato' sans-serif;
`;


const UseFiltro = () => {

    const [ categoria, setCategoria ] = useState('');

    const resultado = useStaticQuery(graphql`
        query {
            allStrapiCategorias {
                categorias: nodes {
                    nombre
                    id
                }
            }
        }
    `);

    

    const { allStrapiCategorias: { categorias } } = resultado;
    
    const FiltroUI = () => (
        <Formulario>
            <Select
                onChange={ e => setCategoria(e.target.value)}
                value={categoria}
            >
                <option value="">-- Filtrar --</option>
                { categorias.map(option => (
                    <option 
                        key={option.id} 
                        value={option.nombre}
                    >{option.nombre}</option>
                ))}
            </Select>
        </Formulario>
    )

    return {
        categoria,
        FiltroUI
    }
}
 
export default UseFiltro;