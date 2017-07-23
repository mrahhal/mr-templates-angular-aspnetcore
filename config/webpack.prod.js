const util = require('./util');
const commonConfig = require('./webpack.common.js');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const AotPlugin = require('@ngtools/webpack').AotPlugin;

const ENV = 'production';

module.exports = webpackMerge(commonConfig, {
	devtool: 'source-map',
	plugins: [
		new webpack.DefinePlugin({
			'ENV': JSON.stringify(ENV)
		}),
		new webpack.optimize.UglifyJsPlugin({
			minimize: true
		}),
		new AotPlugin({
			tsConfigPath: util.root('tsconfig.aot.json'),
			entryModule: util.root('src/app/app.module#AppModule')
		})
	]
});
