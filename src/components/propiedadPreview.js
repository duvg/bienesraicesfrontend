import React from 'react';

// Plugins 
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import BackgroundImage from 'gatsby-background-image';
import Image from 'gatsby-image';
// Components
import Iconos from './iconos';

// Styled components
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
    
    const {nombre, precio, banios, habitaciones, estacionamiento, descripcion, imagen} = propiedad;

    console.log(imagen);
    return (
        <Card>
            <Image
                fluid={imagen.sharp.fluid}
            />
            <Content>
                <h3>{nombre}</h3>
                <p className="precio">$ {precio}</p>
                <Iconos
                    banios={banios}
                    estacionamiento={estacionamiento}
                    habitaciones={habitaciones}
                />
            </Content>
        </Card>
    );
}
 
export default PropiedadPreview;