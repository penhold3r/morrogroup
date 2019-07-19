import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Services = () => {
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

	return (
		<section id="servicios" className="services">
			<h2
				className="services__title lax"
				data-lax-opacity="0 0, 200 1 | offset=(-vh-200)"
				data-lax-translate-x="0 50, 200 0 | offset=(-vh-200)"
			>
				Servicios
			</h2>
			<ul className="services__list">
				<li className="service-card lax" data-lax-opacity="0 0, 200 1 | offset=(-vh-elh)">
					<div
						className="service-card__img lax"
						data-lax-saturate="0 1000, 200 100 | offset=(-vh-elh)"
						data-lax-brightness="0 1000, 200 100 | offset=(-vh-elh)"
					>
						<Img
							fluid={edges[0].node.childImageSharp.fluid}
							alt="Building"
							className="gimage lax"
						/>
					</div>
					<div className="service-card__content">
						<h3 className="service-name">Service Name</h3>
						<p className="service-description">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus adipisci
							atque molestias non quia animi recusandae voluptatibus, dolor eaque alias quam
							itaque maiores voluptatem ea.
						</p>
					</div>
				</li>
				<li className="service-card lax" data-lax-opacity="0 0, 200 1 | offset=(-vh-300-elh)">
					<div
						className="service-card__img lax"
						data-lax-saturate="0 1000, 200 100 | offset=(-vh-300-elh)"
						data-lax-brightness="0 1000, 200 100 | offset=(-vh-300-elh)"
					>
						<Img
							fluid={edges[1].node.childImageSharp.fluid}
							alt="Building"
							className="gimage lax"
						/>
					</div>
					<div className="service-card__content">
						<h3 className="service-name">Service Name</h3>
						<p className="service-description">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus adipisci
							atque molestias non quia animi recusandae voluptatibus, dolor eaque alias quam
							itaque maiores voluptatem ea.
						</p>
					</div>
				</li>
				<li className="service-card lax" data-lax-opacity="0 0, 200 1 | offset=(-vh-600-elh)">
					<div
						className="service-card__img lax"
						data-lax-saturate="0 1000, 200 100 | offset=(-vh-600-elh)"
						data-lax-brightness="0 1000, 200 100 | offset=(-vh-600-elh)"
					>
						<Img
							fluid={edges[2].node.childImageSharp.fluid}
							alt="Building"
							className="gimage lax"
						/>
					</div>
					<div className="service-card__content">
						<h3 className="service-name">Service Name</h3>
						<p className="service-description">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus adipisci
							atque molestias non quia animi recusandae voluptatibus, dolor eaque alias quam
							itaque maiores voluptatem ea.
						</p>
					</div>
				</li>
			</ul>
		</section>
	)
}

export default Services
