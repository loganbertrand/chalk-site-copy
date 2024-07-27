const withPlugins = require("next-compose-plugins")
const optimizedImages = require("next-optimized-images")

require("dotenv").config()

const SVGWebpack = {
	webpack: function (config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: [{ loader: "@svgr/webpack" }],
		})
		return config
	},
}

module.exports = withPlugins(
	[
		[
			optimizedImages,
			{
				handleImages: ["png"],
				optimizeImages: true,
				optimizeImagesInDev: false,
				pngquant: true,
			},
		],
		{
			env: {
				licenseKey: process.env.licenseKey,
				MAILCHIMP_SECRET: process.env.MAILCHIMP_SECRET,
			},
		},
	],
	SVGWebpack
)
