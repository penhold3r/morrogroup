import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const About = ({ isMobile }) => {
	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "morro-about.jpg" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	return (
		<section id="quienes-somos" className="about">
			<div className="about-inner">
				<div
					className={isMobile ? 'about-inner__img' : 'about-inner__img lax'}
					data-lax-translate-x="0 -300, 400 0 | offset=-100"
					data-lax-opacity="0 0, 400 1"
				>
					<Img fluid={data.file.childImageSharp.fluid} alt="Building" className="gimage" />
				</div>
				<div
					className={isMobile ? 'about-inner__content' : 'about-inner__content lax'}
					data-lax-translate-y="0 200, 200 0 | offset=-50"
					data-lax-opacity="0 0, 400 1"
				>
					<h2 className="about-title">Quienes Somos</h2>
					<div className="about-text">
						<p className="lead">
							Somos una empresa familiar con más de 40 años de trayectoria, específicamente,
							la tercera generación puesta en acción enfocada en la construcción,
							gerenciamiento y negocios inmobiliarios. Creemos en el trabajo en equipo como
							herramienta para superar obstáculos y general alianzas positivas.
						</p>

						<p>
							Trabajamos día a día en una gestión integral que cumpla con los plazos
							pactados, la optimización de costos, la calidad de nuestro producto y, como
							prioridad, generar la confianza de nuestros clientes. Nuestro trabajo es
							innovador, moderno, de calidad y enfocado en la excelencia. A eso lo llamamos:
							garantía Basso.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
