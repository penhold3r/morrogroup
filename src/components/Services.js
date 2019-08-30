import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Link from './Link'

const Services = ({ isMobile }) => {
	const {
		allFile: { edges }
	} = useStaticQuery(graphql`
		query ObrasQuery {
			allFile(filter: { relativeDirectory: { eq: "services" } }) {
				edges {
					node {
						id
						name
						publicURL
						childImageSharp {
							fluid {
								src
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
	`)

	const [arqImg] = edges.filter(({ node }) => node.name === 'arquitectura')
	const [constImg] = edges.filter(({ node }) => node.name === 'construccion')
	const [comImg] = edges.filter(({ node }) => node.name === 'comercializacion')

	const searchPlus = (
		<svg
			className="search-plus"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			viewBox="0 0 32 32"
		>
			<title>ver más</title>
			<path d="M14 13v-4h1v4h4v1h-4v4h-1v-4h-4v-1h4zM20.145 19.855c-1.501 1.335-3.479 2.145-5.645 2.145-4.694 0-8.5-3.806-8.5-8.5s3.806-8.5 8.5-8.5c4.694 0 8.5 3.806 8.5 8.5 0 2.167-0.811 4.144-2.145 5.645l0.145-0.145 6.508 6.508c0.275 0.275 0.268 0.716-0.008 0.992-0.278 0.278-0.72 0.28-0.992 0.008l-6.508-6.508 0.145-0.145zM14.5 21c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5v0z" />
		</svg>
	)

	return (
		<section id="servicios" className="services">
			<h2 className="services__title lax" data-aos="fade">
				Servicios
			</h2>
			<ul className="services__list lax">
				<li className="service-card" data-aos="fade-up">
					<Link to="/servicios/arquitectura" className="service-card__img">
						<Img
							fluid={arqImg.node.childImageSharp.fluid}
							alt="Arquitectura"
							className="gimage"
						/>
						<h3 className="service-title">
							<span>Arquitectura</span>
							<span className="plus-cirlce">{searchPlus}</span>
						</h3>
					</Link>
				</li>
				<li className="service-card" data-aos="fade-up">
					<Link to="/servicios/construccion" className="service-card__img">
						<Img
							fluid={constImg.node.childImageSharp.fluid}
							alt="Construción"
							className="gimage"
						/>
						<h3 className="service-title">
							<span>Construción</span>
							<span className="plus-cirlce">{searchPlus}</span>
						</h3>
					</Link>
				</li>
				<li className="service-card" data-aos="fade-up">
					<Link to="/servicios/comercializacion" className="service-card__img">
						<Img
							fluid={comImg.node.childImageSharp.fluid}
							alt="Comercialización"
							className="gimage"
						/>
						<h3 className="service-title">
							<span>Comercialización</span>
							<span className="plus-cirlce">{searchPlus}</span>
						</h3>
					</Link>
				</li>
			</ul>
		</section>
	)
}

export default Services
