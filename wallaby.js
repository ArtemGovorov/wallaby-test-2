/* eslint-disable */
const wallabyWebpack = require('wallaby-webpack');
const webpackConfig = require('./build/webpack.test.conf');
const webpackPostProcessor = wallabyWebpack(webpackConfig);
module.exports = function (wallaby) {
	return {
		files: [
			{
				pattern: 'node_modules/babel-polyfill/dist/polyfill.js',
				instrument: false
			},
			{
				pattern: 'src/**/*.js',
				load: false
			},
			{
				pattern: 'src/**/*.vue',
				load: false
			}
		],

		tests: [
			{
				pattern: 'test/unit/specs/*.spec.js',
				load: false
			}
		],

		compilers: {
			'**/*.js': wallaby.compilers.babel()
		},

		postprocessor: webpackPostProcessor,

		setup: function() {
			window.__moduleBundler.loadTests();
		},

		debug: true,
		testFramework: 'mocha'
	}
};