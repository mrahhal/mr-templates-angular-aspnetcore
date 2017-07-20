const commonConfig = require('./webpack.common.js');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const ENV = 'development';

module.exports = webpackMerge(commonConfig, {
	devtool: 'cheap-module-source-map',
	plugins: [
		new webpack.DefinePlugin({
			'ENV': JSON.stringify(ENV)
		})
	]
});
