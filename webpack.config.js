const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app/main.js'
    },
    output: {
        path: './bin',
        filename: '[name].bundle.js',
    },
    resolve: {
        extentions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }
	]
    },
    plugins: [
        new ExtractTextPlugin('styles.bundle.css', { allChunks: true }),
        new HtmlPlugin(/*{
            template: './src/index.html'
        }*/)
    ]
 };
