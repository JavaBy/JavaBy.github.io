var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: [
            './vendor/angular.src.js',
            './src/app.js'
        ]
    },
    output: {
        filename: '[name].js',
        path: './dest',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: path.resolve('src')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap!less?sourceMap')
            },
            {
                test: /\.(png|jpg)$/, loader: 'url?limit=32768'
            },
            {
                test: /\.html$/, loader: 'ng-cache?prefix=[dir]/[dir]'
            }
        ],
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                include: path.resolve('src')
            }
        ],
        noParse: [
            /angular\.src\.js/
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css', {allChunks: true}),
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'index.html'),
            inject: 'body'
        })
    ],
    devtool: 'eval-source-map',
    resolve: {
        modulesDirectories: ['web_modules', 'node_modules', 'src']
    },
    devServer: {
        historyApiFallback: true,
        stats: {
            chunkModules: false,
            colors: true
        },
        contentBase: './src'
    },
    eslint: {
        configFile: 'src/.eslintrc'
    }
};
