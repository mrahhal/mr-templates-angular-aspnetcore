const path = require('path');
const pkg = require('../package.json');
const util = require('./util');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const autoprefixer = require('autoprefixer');

const prod = util.hasProcessFlag('webpack.prod.js');

const cssLoader = {
	loader: 'css-loader',
	options: {
		minimize: prod,
		sourceMap: !prod,
		url: false
	}
};

const postcssLoaderPlugins = [];
if (prod) {
	postcssLoaderPlugins.push(autoprefixer('last 2 versions'));
}

const postcssLoader = {
	loader: 'postcss-loader',
	options: {
		sourceMap: !prod,
		plugins: () => postcssLoaderPlugins
	}
};

const sassLoader = {
	loader: 'sass-loader',
	options: {
		sourceMap: !prod
	}
};

const htmlMinifyLoader = {
	loader: 'html-minify-loader',
	options: {
		dom: {
			lowerCaseAttributeNames: false,
			lowerCaseTags: false
		}
	}
};

module.exports = {
	entry: {
		polyfills: util.root('src/polyfills.ts'),
		vendor: util.root('src/vendor.ts'),
		app: util.root('src/main.ts')
	},
	output: {
		path: util.root('wwwroot/js'),
		filename: '[name].js',
		publicPath: '/js/'
	},
	resolve: {
		extensions: ['.js', '.ts', '.tsx'],
		modules: [util.root('src'), util.root('node_modules')]
	},
	module: {
		exprContextCritical: false,
		rules: [{
			test: /\.ts(x?)$/,
			use: ['ts-loader', 'angular2-template-loader', 'angular-router-loader']
		}, {
			test: /\.html$/,
			use: ['raw-loader', htmlMinifyLoader]
		}, {
			test: /\.css$/,
			use: ['to-string-loader', cssLoader],
		}, {
			test: /\.scss$/,
			use: ['to-string-loader', cssLoader, postcssLoader, sassLoader]
		}]
	},
	plugins: [
		// new BundleAnalyzerPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'polyfills']
		}),
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery'
		})
	]
};
