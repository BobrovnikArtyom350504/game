module.exports = {
    entry: './src/js/app.js',
    output: {
        path: './bin',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader'],
            exclude: /node_modules/
        }
	    ]
    }
 };