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
			components: resolve(__dirname, 'src/components/')
		}
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				use: [ 'babel-loader',  ],
				exclude: /node_modules/
			},
			{
				test: /\.less?$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader?modules&importLoaders=2'},
					{loader: 'postcss-loader'},
					{loader: 'less-loader', options: {javascriptEnabled: true}}
				],
				exclude: /nodde_modules/
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
				  fallback: 'style-loader', 
				  use: ['css-loader']
				})
			},
			{
				test: /\.(png|jpe?g|gif+webp)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 1024 * 10,
						name: 'images/[name].[ext]'
					}
				}]
			}

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
