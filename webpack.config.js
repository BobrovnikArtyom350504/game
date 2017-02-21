const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        game: './src/game/index.js'
    },
    output: {
        path: './dist',
        filename: '[name].[hash].bundle.js',
    },
    resolve: {
        root: [
            path.resolve('./src')
        ],
        extentions: ['', '.js']
    },
    devtool: '#cheap-module-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-decorators-legacy'],
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.scss/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
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
