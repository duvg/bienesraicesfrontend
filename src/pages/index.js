import React from 'react';
// Plugins
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';

// Components
import Layout from '../components/layout';
import Encuentra from '../components/encuentra';

// Hooks
import useInicio from '../hooks/useInicio';

// Css modules
import * as heroCss from '../css/hero.module.css';

// Styled components
const ImageBackground = styled(BackgroundImage)`
    height: 600px;
`;

const Index = () => {

    const inicio = useInicio();
    
    const { nombre, contenido, imagen } = inicio[0];

    return (
        <Layout>
            <ImageBackground
                tag="section"
                fluid={imagen.childImageSharp.fluid}
                fadeIn="soft"
            >
                <div className={heroCss.imagenbg}>
                    <h1 className={heroCss.titulo}>Venta de Casas y Apartamentos</h1>
                    <h3 className={heroCss.subtitulo}>El Inmueble ideal, al mejor precio</h3>
                </div>
            </ImageBackground>
            <main>
                <div
                    css={css`
                        max-width: 1000px;
                        margin: 0 auto;
                    `}
                >
                    <h1>{nombre}</h1>
                    <p 
                        css={
                            css`text-align: justify;
                        `}
                    >{contenido}</p>
                </div>
            </main>

            <Encuentra />
            
        </Layout>
    );
}
 
export default Index;