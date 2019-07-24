import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { isMobile } from 'react-device-detect'

import Header from './Header'

import 'sanitize.css'
import '../styles/index.scss'

if (typeof window !== 'undefined') {
	// eslint-disable-next-line global-require
	require('smooth-scroll')('a[href*="#"]', {
		speed: 800,
		speedAsDuration: true,
		easing: 'easeInOutCubic',
		offset: isMobile ? 100 : 0
	})
}

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<>
			<Header siteTitle={data.site.siteMetadata.title} />
			<main className="main-content">{children} </main>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
}

export default Layout
