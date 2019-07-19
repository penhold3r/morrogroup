import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const About = () => {
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
					className="about-inner__img lax"
					data-lax-translate-x="0 -300, 400 0 | offset=-100"
					data-lax-opacity="0 0, 400 1"
				>
					<Img fluid={data.file.childImageSharp.fluid} alt="Building" className="gimage" />
				</div>
				<div
					className="about-inner__content lax"
					data-lax-translate-y="0 200, 200 0 | offset=-50"
					data-lax-opacity="0 0, 400 1"
				>
					<h2 className="about-title">Quienes Somos</h2>
					<div className="about-text">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, obcaecati
							reiciendis vitae quibusdam expedita sunt ut repellat excepturi exercitationem
							magnam iusto illum! Earum, deleniti dolorem. Tempore assumenda repellendus
							harum totam?
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
