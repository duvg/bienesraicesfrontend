import React from 'react';

// Helpers
import { Link, graphql, useStaticQuery } from 'gatsby';

// Components
import Navigation from './navigation';

// Plugins
import { css } from '@emotion/react';

const Header = () => {

    // Consultar el logo.svg
    const { logo } = useStaticQuery( graphql`
        query {
            logo: file(relativePath: {eq: "logo.svg"}) {
                publicURL
            }
        }

    `);


    return (
        <header
            css={css`
                background-color: #0D283B;
                padding: 1rem;
            `}
        >
            <div
                css={css`
                    max-width: 120rem;
                    margin: 0 auto;
                    text-align: center;

                    @media (min-width: 768px) {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            >
                <Link to={"/"}>
                    <img src={logo.publicURL} alt="Logotipo Bienes Raices" />
                </Link>

                <Navigation />
            </div>
        </header>
    );
}
 
export default Header;