import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../../components/Layout'

const ArqPage = () => {
	const { file } = useStaticQuery(graphql`
		query ArqQuery {
			file(name: { eq: "arquitectura" }) {
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
	`)

	return (
		<Layout pageTitle="Arquitectura">
			<section className="service arq">
				<header className="service__header">
					<Img className="service-hero" fluid={file.childImageSharp.fluid} alt={file.name} />

					<h2 className="service-title">
						<div className="go-back" onClick={() => window.history.back()}>
							<i className="icon icon-up-arrow" />
						</div>
						<span>Arquitectura</span>
					</h2>
				</header>
				<div className="service__content">
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus eligendi earum
						assumenda nemo magnam commodi repudiandae id natus culpa officia, quasi dolores
						accusamus nisi molestias? Dolor natus cum fugit sapiente nisi alias deleniti
						nesciunt deserunt quae expedita, explicabo, impedit pariatur fuga quaerat, tenetur
						perferendis quam. Aliquam qui saepe magnam perspiciatis?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime praesentium quae,
						facilis officiis autem fuga debitis quos nulla similique voluptatum voluptas?
						Animi in nobis reiciendis omnis sunt, aspernatur maiores dicta, amet, rerum
						exercitationem sapiente eveniet eos quasi consectetur dolorem repellat.
					</p>
				</div>
			</section>
		</Layout>
	)
}

export default ArqPage
