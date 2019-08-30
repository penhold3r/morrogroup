import React from 'react'
import { isMobile } from 'react-device-detect'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'

const IndexPage = () => {
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
