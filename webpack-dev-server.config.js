const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: [
        'webpack/hot/dev-server',
        'webpack/hot/only-dev-server',
        path.join(__dirname, '/src/app/app.jsx')
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['node_modules']
    },
    devServer: {
        contentBase: 'src/www',
        devtool: 'eval',
        hot: true,
        inline: true,
        port: 3000
    },
    devtool: 'eval-source-map',
    output: {
        path: buildPath,
        filename: 'app.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'index.html'),
            inject: 'body'
        })
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
            loaders: ['react-hot', 'babel'],
            exclude: [nodeModulesPath]
        }]
    },
    eslint: {
        configFile: 'src/.eslintrc'
    }
};

module.exports = config;
