import { gatsby, graphql, useStaticQuery} from 'gatsby';

const usePropiedades = () => {
    const datos = useStaticQuery(graphql`
        query {
            allStrapiPropiedades {
                nodes {
                    id
                    nombre
                    precio
                    banios
                    habitaciones
                    estacionamiento
                    descripcion
                    agentes {
                        nombre
                        email
                        telefono
                    }
                    categoria {
                        nombre
                    }
                    imagen {
                        sharp: childImageSharp {
                            fluid ( maxWidth: 600, maxHeight:400) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
               
            }
        }

    `);

    return datos.allStrapiPropiedades.nodes.map(propiedad => ({
        id: propiedad.id,
        nombre: propiedad.nombre,
        descripcion: propiedad.descripcion,
        precio: propiedad.precio,
        banios: propiedad.banios,
        habitaciones: propiedad.habitaciones,
        estacionamiento: propiedad.estacionamiento,
        agentes: propiedad.agentes,
        categoria:  propiedad.categoria,
        imagen:  propiedad.imagen

    }));
}

export default usePropiedades;