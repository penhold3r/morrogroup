import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { isMobile } from 'react-device-detect'
import AOS from 'aos'

import Intro from '../components/Intro'
import Header from './Header'

import 'sanitize.css'
import 'aos/dist/aos.css' // You can also use <link> for styles
import '../styles/index.scss'

if (typeof window !== 'undefined') {
	// eslint-disable-next-line global-require
	require('smooth-scroll')('a.scroll-link[href*="#"]', {
		speed: 800,
		speedAsDuration: true,
		easing: 'easeInOutCubic',
		offset: isMobile ? 100 : 0
	})
}

const Layout = ({ children, pageTitle }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	const [introState, setIntroState] = useState(false)

	const { title } = data.site.siteMetadata

	const domReady = callback => {
		document.readyState === 'interactive' || document.readyState === 'complete'
			? callback()
			: document.addEventListener('DOMContentLoaded', callback)
	}

	useEffect(() => {
		const intro = JSON.parse(sessionStorage.getItem('intro'))

		setIntroState(intro)
		domReady(() => {
			AOS.init({
				easing: 'ease-in-out'
			})
			console.log(AOS, 'ready')
		})
	}, [])

	return (
		<>
			<Helmet
				htmlAttributes={{ lang: 'es' }}
				title={pageTitle ? pageTitle + ' | ' + title : title}
				link={[
					{
						href: 'https://file.myfontastic.com/SnS98Lv4hKuJ5pWJ47AKjb/icons.css',
						rel: 'stylesheet'
					}
				]}
			/>
			{!introState && <Intro />}
			<Header siteTitle={title} />
			<main className="main-content">{children} </main>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
}

export default Layout
