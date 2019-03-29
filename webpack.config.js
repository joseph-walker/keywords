const path = require('path');

const env = process.env.NODE_ENV;

function srcPath(subdir) {
    return path.join(__dirname, 'src', subdir);
}

let config = {
	entry: './src/main.tsx',
	output: {
		path: path.join(__dirname, 'dist/'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		alias: {
			components: srcPath('components'),
			containers: srcPath('containers'),
			styles: srcPath('styles'),
			util: srcPath('util')
		}
	},
	module: {
		rules: [
			{ test: /\.tsx?$/, loader: 'ts-loader' }
		]
	}
}

if (env == 'development') {
	config = Object.assign({}, config, {
		mode: 'development',
		devtool: 'inline-source-map',
		devServer: {
			contentBase: './',
			publicPath: '/dist/',
			index: 'index.html',
			historyApiFallback: {
				index: 'index.html'
			}
		},
	});
}

if (env == 'production') {
	config = Object.assign({}, config, {
		mode: 'production',
	});
}

module.exports = config;
