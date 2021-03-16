import React from 'react';
// Plugins
import Helmet from 'react-helmet';
import { Global, css } from '@emotion/react';

const Layout = ({children}) => {
    return (
        <>
            <Global
                styles={css`
                    html {
                        font-size: 62.5%;
                        box-sizing: border-bottom;
                    }
                    *, *:before, *:after {
                        box-sizing: inherit;
                    }
                    body {
                        font-size: 1.6rem; // 16 pixeles
                        line-height: 2;
                        font-family: 'Lato', sans-serif;
                    }
                    h2, h2, h3 {
                        margin: 0;
                        line-height: 1.5;
                    }

                    h1, h2 {
                        text-align: center;
                        font-family: 'Lato', sans-serif;
                        font-weight: 300;
                    }
                    h3 {
                        font-family: 'Roboto', sans-serif;
                    }
                    ul {
                        list-style: 0;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        max-width: 120rem; // 1200px
                        margin: 0 auto;
                        width: 95%;
                    }
                    img {
                        max-width: 100%;
                    }
                `}
            />
            <Helmet>
                <title>Bienes Raices DU</title>
                <meta name="description" content="Sitio web de bienes raices" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
            </Helmet>
            <h1>Admin panel</h1>
            {children}
        </>
    );
}
 
export default Layout;