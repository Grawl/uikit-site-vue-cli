// IDE helper to resolve aliases
// IntelliJ products: Preferences › Languages & Frameworks › JavaScript › Webpack › webpack configuration file
const path = require('path')
module.exports = {
	resolve: {
		alias: {
			'uikit-util': path.resolve(__dirname, 'node_modules/uikit/src/js/util'),
		},
	},
}
