const {resolve, relative} = require('path');
const webpack = require('webpack');
const fs = require('fs');
const walk = require('klaw-sync');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: resolve(__dirname, 'src'),
	entry: {
		
	},
	output: {
		filename: '[name].bundle.js',
		path: resolve(__dirname, 'public'),
		publicPath: '/admin/public/'
	},
	resolve: {
		alias: {
		
		}
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				use: [ 'babel-loader',  ],
				exclude: /node_modules/
			},
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			title: '我的王国',
			template: './index.html',
			inject: true
		}),
	]
}
