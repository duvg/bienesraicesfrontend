import React from 'react';

// Plugins 
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/react'; 
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// Components
import Layout from './layout';
import Iconos from './iconos';

// Styled components
const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
`;

const Sidebar = styled.aside`
    .precio {
        font-size: 2rem;
        color:  #75AB00;
    }
    .agente {
        margin-top: 4rem;
        border-radius: 2rem;
        background-color: #75AB00;
        padding: 3rem;
        color: #FFF;

        p {
            margin: 0;
        }
    }
`;

export const query = graphql`
    query($id: String!) {
        allStrapiPropiedades( filter: { id: { eq: $id }}) {
            nodes {
                nombre
                descripcion
                habitaciones
                estacionamiento
                banios
                precio
                agentes {
                    nombre
                    telefono
                    email
                    imagen {
                    sharp: childImageSharp {
                            gatsbyImageData (
                                width: 1200
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF]
                            )
                        }
                    }
                }
                imagen {
                    sharp: childImageSharp {
                        gatsbyImageData (
                            width: 1200
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
            }
        }
    }
`;

const Propiedades = ({data: { allStrapiPropiedades: { nodes }}}) => {
    console.log(nodes);
    const { 
        nombre,
        descripcion,
        habitaciones,
        estacionamiento,
        banios,
        precio,
        imagen,
        agentes
    } = nodes[0];

    const img = getImage(imagen.sharp.gatsbyImageData);
    
    //const imgAgente = getImage(agentes.imagen.sharp.gatsbyImageData);
    
    return (
        <Layout>
            <h1>{nombre}</h1>
            <Content>
                <main>
                    <GatsbyImage
                        image={img} alt={nombre}
                    />
                    <p css={css`text-align: justify;`}>{descripcion}</p>
                </main>
                <Sidebar>
                    <p className="precio">
                        $ {precio}
                    </p>
                    <Iconos
                        banios={banios}
                        estacionamiento={estacionamiento}
                        habitaciones={habitaciones}
                    />
                    <div className="agente">
                        <h2>Vendedor</h2>
                      
                        <p>{agentes.nombre}</p>
                        <p>{agentes.telefono}</p>
                        <p>{agentes.email}</p>
                    </div>
                </Sidebar>
            </Content>
        </Layout>
    );
}
 
export default Propiedades;