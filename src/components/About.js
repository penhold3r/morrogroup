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
					data-aos="fade-right"
				>
					<Img fluid={data.file.childImageSharp.fluid} alt="Building" className="gimage" />
				</div>
				<div className={isMobile ? 'about-inner__content' : 'about-inner__content lax'}>
					<h2 className="about-title" data-aos="fade-left">
						¿Cómo nace?
					</h2>
					<div className="about-text" data-aos="fade">
						<p>
							Morro Grupo Inversor nace en el seno familiar de sus fundadores tomando como
							pilar la confianza y buscando cumplir un sueño común.
						</p>

						<p>
							Somos una empresa multifacética formada por jóvenes emprendedores, que une la
							arquitectura y el servicio inmobiliario para ofrecer soluciones a la medida de
							cada uno de nuestros clientes e inversores.
						</p>

						<p>
							Valoramos la confianza y el trabajo en equipo con nuestros clientes e
							inversores, buscando potenciar la sinergia que se genera en cada uno de los
							proyectos por el continuo aporte y esfuerzo en conjunto.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
