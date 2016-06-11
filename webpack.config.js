var webpack = require('webpack');
var path= require('path');

var SRC_DIR= path.resolve( __dirname ,'app/src/');
var BUILD_DIR= path.resolve( __dirname , 'app');

var config={
	entry: [SRC_DIR + '/components/index.jsx'],
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module:{
		loaders:[{
			test: /\.jsx?/,
			include:SRC_DIR,
			loader:'babel'
		}]
	}
}

module.exports = config;