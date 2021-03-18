import React from 'react';

// Plugins
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

// Css modules
import * as heroCss from '../css/hero.module.css';

const ImageBackground = styled(BackgroundImage)`
    height: 300px;
`;

const Encuentra = () => {

    const { imagen } = useStaticQuery(graphql`
        query {
	        imagen: file(relativePath: { eq: "encuentra.jpg"}) {
		        sharp: childImageSharp {
                    fluid(quality: 90, maxWidth: 1500) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    console.log(imagen);
    return (
        <ImageBackground
            tag="section"
            fluid={imagen.sharp.fluid}
            fadeIn="soft"
        >
            <div className={heroCss.imagenbg}>
                <h3 className={heroCss.titulo}>Encuentra la casa de tus sueños</h3>
                <p>25 años de Experiencia</p>
            </div>
        </ImageBackground>

    );
}
 
export default Encuentra;