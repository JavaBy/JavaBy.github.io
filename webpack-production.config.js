const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
    entry: [path.join(__dirname, '/src/app/app.jsx')],
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['node_modules']
    },
    devtool: 'source-map',
    output: {
        path: buildPath,
        filename: 'app.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.NoErrorsPlugin(),
        new TransferWebpackPlugin([
            {from: 'www'}
        ], path.resolve(__dirname, 'src'))
    ],
    module: {
        preLoaders: [{
            test: /\.(js|jsx)$/,
            loader: 'eslint-loader',
            include: [path.resolve(__dirname, 'src/app')],
            exclude: [nodeModulesPath]
        }],
        loaders: [{
            test: /\.(js|jsx)$/,
            loaders: ['babel'],
            exclude: [nodeModulesPath]
        }]
    },
    eslint: {
        configFile: 'src/.eslintrc'
    }
};

module.exports = config;
