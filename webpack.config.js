var webpack = require('webpack');
var path = require('path');

var BUILD_PATH = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js',
        publicPath: "/dist/"
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                DEV_MODE: true,
                NODE_ENV: JSON.stringify('development')
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loaders: ['babel-loader']
            }
        ]
    },
    devServer: {
        port: 3000
    }
};

module.exports = config;