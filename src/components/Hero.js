import React, { useState, useEffect } from 'react'

const context = require.context('../images/slider', true, /slider(\d+)\.jp(e?)g/)
const images = context.keys().map(key => context(key))
const slides = [
	{
		title: 'Arquitectura',
		text:
			'Creación de proyectos inmobiliarios, urbanísticos, de refacción, reciclados y diseño de interiores.',
		image: images[0]
	},
	{
		title: 'Construcción',
		text:
			'Abarcamos desde remodelaciones, refacciones, reciclado de propiedades, hasta el desarrollo de proyectos nuevos y urbanizaciones.',
		image: images[1]
	},
	{
		title: 'Comercialización',
		text: 'Ventas, permutas, alquileres y administraciones de inmuebles.',
		image: images[2]
	}
]

const Hero = ({ isMobile }) => {
	const [currSlide, setCurrSlide] = useState(1)
	const [order, setNewOrder] = useState(slides.map((e, i) => i + 1))

	const interval = 5500

	const scroll = () => {
		const about = document.querySelector('.about')
		about.scrollIntoView({ behavior: 'smooth' })
	}

	useEffect(() => {
		let newOrder = [...order]

		let currSlide = 1
		setInterval(() => {
			let last = newOrder.pop()
			newOrder.unshift(last)
			setNewOrder(newOrder)

			currSlide = currSlide < slides.length ? currSlide + 1 : 1
			setCurrSlide(currSlide)
		}, interval)
	}, [])

	return (
		<section id="inicio" className="hero">
			<div className="swiper">
				<div className={isMobile ? 'swiper-wrapper' : 'swiper-wrapper lax'}>
					{slides.map((slide, key) => {
						const active = currSlide === key + 1

						return (
							<div
								id={`slide-0${key + 1}`}
								className={`swiper-slide ${active ? 'active' : ''}`}
								style={{ zIndex: active ? slides.length + 1 : order[key] }}
								key={key}
							>
								<div className="swiper-slide__content">
									<h3>{slide.title}</h3>
									<p>{slide.text}</p>
								</div>
								<div className="swiper-slide__img">
									<img src={slide.image} alt="" />
								</div>
							</div>
						)
					})}
				</div>
			</div>
			<div className="arrow" onClick={scroll} />
		</section>
	)
}

export default Hero
