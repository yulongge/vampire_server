const webpackCommon = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(webpackCommon, {
	entry: {
		main: [
			'react-hot-loader/patch',
			'./index.js'
		]
	},
	mode: 'development'
})
