const {resolve, relative} = require('path');
const webpack = require('webpack');
const fs = require('fs');
const walk = require('klaw-sync');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
				use: [ {loader: 'babel-loader', options: {
					"presets": [
						"es2015", "stage-1", "react"
					  ],
					plugins: [
						"transform-decorators-legacy",
						"react-hot-loader/babel",
						[
							"import",
							{libraryName: "antd", style: 'css'}
						] 
					]
				} }],
				exclude: /node_modules/,
                    
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
			// {
			// 	test: /\.css$/,
			// 	use: [
			// 		{
			// 			loader: MiniCssExtractPlugin.loader,
			// 			options: {
			// 				publicPath: '../'
			// 			}
			// 		},
			// 		"css-loader"
			// 	]
			// },
			{//antd样式处理
				test:/\.css$/,
				exclude:/src/,
				use:[
					{ loader: "style-loader",},
					{
						loader: "css-loader",
						options:{
							importLoaders:1
						}
					}
				]
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
			},
			{
				test: /\.(svg)$/,
				use: [{
					loader: 'url-loader',
					options: {
					limit: 1024*10,
					name: 'images/[name].[ext]'
					}
				},{
					loader: 'image-webpack-loader',
					options: {
					gifsicle: {
						interlaced: false,
					},
					optipng: {
						optimizationLevel: 7,
					},
					pngquant: {
						quality: '65-82',
						speed: 4
					},
					mozjpeg: {
						progressive: true,
						quality: 65
					},
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
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
	]
}
