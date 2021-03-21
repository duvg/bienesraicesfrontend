import React from 'react';

// Plugins 
import styled from '@emotion/styled';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import urlSlug from 'url-slug';
// Components
import { Link } from 'gatsby'; 
import Iconos from './iconos';

// Styled components
const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #75AB00;
    width: 100%;
    color: #FFFFFF;
    display: block;
    text-decoration: none;
    text-align: center;
    font-weight:  700;
    text-transform: uppercase;
`;

const Card = styled.div`
    border: 1px solid #E1E1E1;
    img {
        max-width: 100%;
    }
`;

const Content = styled.div`
    padding: 2rem;
    h3 {
        font-family: 'Lato', sans-serif;
        margin: 0 0 2rem 0;
        font-size: 2.4rem;
    }
    .precio {
        font-size: 2rem;
        color: #758000;
    }
`;



const PropiedadPreview = ({ propiedad }) => {
    
    const {nombre, precio, banios, habitaciones, estacionamiento, imagen} = propiedad;
    const img = getImage(imagen.sharp.gatsbyImageData);
    
    return (
        <Card>

            <GatsbyImage
                image={img}
                alt={nombre}
            />
            <Content>
                <h3>{nombre}</h3>
                <p className="precio">$ {precio}</p>
                <Iconos
                    banios={banios}
                    estacionamiento={estacionamiento}
                    habitaciones={habitaciones}
                />

                <Boton to={ `/${urlSlug( nombre )}` }>
                    Ver Propiedad
                </Boton>
            </Content>
        </Card>
    );
}
 
export default PropiedadPreview;