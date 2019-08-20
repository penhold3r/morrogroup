import React, { useState } from 'react'
import { globalHistory } from '@reach/router'
import PropTypes from 'prop-types'
import Link from './Link'

import logo from '../images/morro-logo-white.svg'

const Header = ({ siteTitle }) => {
	const [hambState, setHambState] = useState(false)
	const [menuState, setMenuState] = useState(false)

	const { pathname } = globalHistory.location

	const handleClick = e => {
		setHambState(!hambState)
		setMenuState(!menuState)

		console.log(pathname)

		if (pathname === '/') {
			e.preventDefault()
			window.history.pushState('', null, '/')
		}
	}

	const linkClass = pathname === '/' ? 'scroll-link link' : 'link'

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
						<Link
							to={pathname === '/' ? '#inicio' : '/'}
							className={linkClass}
							onClick={handleClick}
						>
							Inicio
						</Link>
					</li>
					<li className="nav-list__item">
						<Link
							to={pathname === '/' ? '#quienes-somos' : '/'}
							className={linkClass}
							onClick={handleClick}
						>
							Quienes Somos
						</Link>
					</li>
					<li className="nav-list__item">
						<Link
							to={pathname === '/' ? '#servicios' : '/'}
							className={linkClass}
							onClick={handleClick}
						>
							Servicios
						</Link>
					</li>
					<li className="nav-list__item">
						<Link
							to={pathname === '/' ? '#contacto' : '/'}
							className={linkClass}
							onClick={handleClick}
						>
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
