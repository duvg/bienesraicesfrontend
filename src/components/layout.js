import React from 'react';
// Plugins
import Helmet from 'react-helmet';
import { Global, css } from '@emotion/react';

const Layout = ({children}) => {
    return (
        <>
            <Global
                styles={css`
                    body {
                        background-color: red;
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