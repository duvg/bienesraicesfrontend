import React from 'react';

// Plugins 
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// Components
import Layout from './layout';
import ListadoPropiedades from './listadoPropiedades';

// Styled components
const ContentPage = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
`;


export const query = graphql`
query($id: String!) {
    allStrapiPaginas( filter: {id: { eq: $id}}) {
        nodes {
            nombre,
            contenido,
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

const Propiedades = ({data: { allStrapiPaginas: { nodes }}}) => {
    
    const { nombre, contenido, imagen } = nodes[0];
    const img = getImage(imagen.sharp.gatsbyImageData);
    
    //const imgAgente = getImage(agentes.imagen.sharp.gatsbyImageData);
    console.log(nodes);
    return (
        <Layout>
            
           <main classNAme="container">
                <h1>{nombre}</h1>
                <ContentPage>
                    <GatsbyImage
                        image={img} alt={nombre}
                    />
                    
                    <p>{contenido}</p>
                </ContentPage>
           </main>

           { nombre === 'Propiedades' && (<ListadoPropiedades />)}
            
        </Layout>
    );
}
 
export default Propiedades;