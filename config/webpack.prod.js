const commonConfig = require('./webpack.common.js');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const ENV = 'production';

module.exports = webpackMerge(commonConfig, {
	devtool: 'source-map',
	plugins: [
		new webpack.DefinePlugin({
			'ENV': JSON.stringify(ENV)
		}),
		new webpack.optimize.UglifyJsPlugin({
			minimize: true
		})
	]
});
