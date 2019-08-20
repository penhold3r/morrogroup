import React, { useState, useEffect } from 'react'
import { animationEnded } from '../utils/animation-ended'

import logo from '../images/morro-logo-white.svg'

const Intro = () => {
	const [finished, setFinished] = useState(false)

	useEffect(() => {
		const intro = document.querySelector('.intro')

		animationEnded(intro, e => {
			e.target.classList.contains('intro') && setFinished(true)
			sessionStorage.setItem('intro', 'true')
		})
	}, [])

	return (
		<div className="intro" style={{ display: finished ? 'none' : 'block' }}>
			<div className="black">
				<img className="logo" src={logo} alt="Morro" />
				<p className="loading">Cargando...</p>
			</div>
		</div>
	)
}

export default Intro
