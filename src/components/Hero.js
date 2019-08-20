import React, { useState, useEffect } from 'react'

const context = require.context('../images/slider', true, /slider(\d+)\.jp(e?)g/)
const images = context.keys().map(key => context(key))
const slides = [
	{
		title: '1 Lorem ipsum dolor',
		text:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic commodi fugit dolores consequuntur? Dicta, nam!',
		image: images[0]
	},
	{
		title: '2 Lorem ipsum dolor',
		text:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic commodi fugit dolores consequuntur? Dicta, nam!',
		image: images[1]
	},
	{
		title: '3 Lorem ipsum dolor',
		text:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic commodi fugit dolores consequuntur? Dicta, nam!',
		image: images[2]
	},
	{
		title: '4 Lorem ipsum dolor',
		text:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic commodi fugit dolores consequuntur? Dicta, nam!',
		image: images[3]
	}
]

const Hero = ({ isMobile }) => {
	const [initSlide, setInitSlide] = useState(false)
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

			currSlide > 1 && setInitSlide(true)

			currSlide = currSlide < slides.length ? currSlide + 1 : 1
			setCurrSlide(currSlide)
		}, interval)
	}, [])

	return (
		<section id="inicio" className="hero">
			<div className="swiper">
				<div
					className={isMobile ? 'swiper-wrapper' : 'swiper-wrapper lax'}
					data-lax-translate-y="0 0, vh 400"
					data-lax-opacity="0 1, vh 0"
				>
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
				<div className="swiper__pagination" />
			</div>
			<div className="arrow" onClick={scroll} />
		</section>
	)
}

export default Hero
