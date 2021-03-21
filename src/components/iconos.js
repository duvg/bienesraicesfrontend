import React from 'react';

// Plugins 
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

const ListadoIconos = styled.ul`
    display: flex;
    justify-content: space-between;
    flex: 1;
    max-width: 500px;
    margin: 3rem auto 0 auto;
    
    li {
        display: flex;
        img {
            margin-right: 1rem;
        }
    }
`;

const Iconos = ({banios, estacionamiento, habitaciones}) => {
    
    const { iconos } = useStaticQuery(graphql`
        query {
            iconos: allFile(filter: {relativeDirectory: {eq: "iconos"}}) {
                edges {
                    node {
                        id,
                        publicURL
                    }
                }
            }
        }
    `);
    
    const imgIconos = iconos.edges;
    return (
        <ListadoIconos>
            <li>
                <img src={imgIconos[2].node.publicURL} alt="Icono Baño"/>
                <p> {banios} </p>
            </li>
            <li>
                <img src={imgIconos[1].node.publicURL} alt="Icono Estacionamiento"/>
                <p> {estacionamiento} </p>
            </li>
            <li>
                <img src={imgIconos[0].node.publicURL} alt="Icono Habitacione"/>
                <p> {habitaciones} </p>
            </li>
        </ListadoIconos>
    );
}
 
export default Iconos;