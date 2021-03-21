import { graphql, useStaticQuery} from 'gatsby';

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
							    gatsbyImageData(
											width: 600
                                            height: 400
         									placeholder: BLURRED
         									formats: [AUTO, WEBP, AVIF]
                                )
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