import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from './Link'

import logo from '../images/morro-logo-white.svg'

const Header = ({ siteTitle }) => {
	const [hambState, setHambState] = useState(false)
	const [menuState, setMenuState] = useState(false)

	const handleClick = e => {
		e.preventDefault()
		setHambState(!hambState)
		setMenuState(!menuState)
		window.history.pushState('', null, '/')
	}

	return (
		<header className="site-header">
			<h1 className="logo">
				<img src={logo} alt={siteTitle} />
			</h1>

			<div
				className={hambState ? 'hamb-menu crossed' : 'hamb-menu'}
				onClick={() => {
					setHambState(!hambState)
					setMenuState(!menuState)
				}}
			>
				<div className="hamb-menu__bar" />
				<div className="hamb-menu__bar" />
				<div className="hamb-menu__bar" />
			</div>

			<nav className={menuState ? 'site-nav open' : 'site-nav'}>
				<ul className="nav-list">
					<li className="nav-list__item">
						<Link to="#inicio" className="link" onClick={handleClick}>
							Inicio
						</Link>
					</li>
					<li className="nav-list__item">
						<Link to="#quienes-somos" className="link" onClick={handleClick}>
							Quienes Somos
						</Link>
					</li>
					<li className="nav-list__item">
						<Link to="#servicios" className="link" onClick={handleClick}>
							Servicios
						</Link>
					</li>
					<li className="nav-list__item">
						<Link to="#contacto" className="link" onClick={handleClick}>
							Contacto
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

Header.propTypes = {
	siteTitle: PropTypes.string
}

Header.defaultProps = {
	siteTitle: ``
}

export default Header
