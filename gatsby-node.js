const urlSlug = require('url-slug');

exports.createPages = async ({ actions, graphql, reporter }) => {
    const resultado = await graphql(`
        query {
            allStrapiPaginas {
                nodes {
                    nombre
                    id
                }
            }
            allStrapiPropiedades {
                nodes {
                    nombre
                    id
                }
            }
        
        }
    `);

    
    // Si no hay resultados
    if(resultado.errors) {
        reporter.panic('Sin resultados', resultado.errors);
    }

    // Si hay resultaedos, generar los archivos estaticos
    const paginas = resultado.data.allStrapiPaginas.nodes;
    const propiedades = resultado.data.allStrapiPropiedades.nodes;
    
    // Crear templates para paginas
    console.log(JSON.stringify(paginas));
    paginas.forEach( pagina => {
        actions.createPage({
            path: urlSlug( pagina.nombre ),
            component: require.resolve('./src/components/paginas.js'),
            context: {
                id: pagina.id
            }
        })
    });
    
    // Crear los templates de las propieades
    propiedades.forEach( propiedad => {
        actions.createPage({
            path: urlSlug( propiedad.nombre ),
            component: require.resolve('./src/components/propiedades.js'),
            context: {
                id: propiedad.id
            }
        })
        
    })
}