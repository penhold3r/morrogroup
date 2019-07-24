import React, { useEffect } from 'react'
import { isMobile } from 'react-device-detect'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'

import lax from 'lax.js'

const IndexPage = () => {
	useEffect(() => {
		lax.setup() // init animations

		document.addEventListener(
			'scroll',
			x => {
				lax.update(window.scrollY)
			},
			false
		)

		lax.update(window.scrollY)
	})

	return (
		<Layout>
			<Hero isMobile={isMobile} />
			<About isMobile={isMobile} />
			<Services isMobile={isMobile} />
			<Contact />
		</Layout>
	)
}

export default IndexPage
