const webpackCommon = require('./webpack.common');
const merge = require('webpack-merge');
const {resolve} = require('path');

module.exports = merge(webpackCommon, {
	entry: {
		main: [
			'./index.js'
		]
	},
	devtool: 'inline-source-map',
	mode: 'development',
	devServer: {
		contentBase: resolve(__dirname, 'public'), //指定服务器资源的更目录
		port: '8080',
		host: 'localhost',
		historyApiFallback: true, //指定404页面
		
	}
})
