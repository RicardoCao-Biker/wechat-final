const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: './src/app.jsx',
	output: {
		path: path.resolve(__dirname,'dist'),
		publicPath: '/dist/',
		filename: 'js/app.js'
	},
	resolve:{
		alias:{
			page: path.resolve(__dirname,'src/page'),
			component: path.resolve(__dirname,'src/component'),
		}
	},
	module: {
		rules: [
		// react语法的处理
			{
				test: /\.jsx$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env','react']
					}
				}
			},
			// css文件的处理
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			},
			//图片的配置
			{
				test:/\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit:8192,
							name:'resouce/[name].[ext]'
						}
					}
				]
			}
			
		]
	},
	plugins: [
		// 处理html文件
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		// 独立css文件
		new ExtractTextPlugin("css/[name].css"),
	],
	devServer:{
		port: 8086,
	}
};
 