const globImporter = require('node-sass-glob-importer')

module.exports = {
	siteMetadata: {
		title: `Morro Group`,
		description: `Grupo inversor.`,
		author: `@penholder`
	},
	plugins: [
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				precision: 8,
				importer: globImporter()
			}
		},
		{
			resolve: `gatsby-plugin-purgecss`,
			options: {
				printRejected: true // Print removed selectors and processed file names
				// develop: true, // Enable while using `gatsby develop`
				// tailwind: true, // Enable tailwindcss support
				// whitelist: ['whitelist'], // Don't remove this selector
				// ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
				// purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				custom: {
					families: ['Colaborate'],
					urls: ['fonts.css']
				}
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `morro-group`,
				short_name: `morro`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#000000`,
				display: `minimal-ui`,
				icon: `src/images/icons/favicon.png` // This path is relative to the root of the site.
			}
		}
	]
}
