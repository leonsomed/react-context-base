const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    entry: {
        src: path.resolve(__dirname, 'src', 'index.js'),
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.s?css/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
                loader: 'file-loader',
                options: {
                    publicPath: 'fonts/',
                    outputPath: 'fonts/',
                    name: '[name].[ext]',
                    emitFile: true,
                },
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                loader: 'file-loader',
                options: {
                    publicPath: '/',
                    name: '[name].[ext]',
                },
            },
            {
                test: /\.(ico)(\?.*$|$)/,
                loader: 'file-loader',
                options: {
                    publicPath: '/',
                    name: '[name].[ext]',
                },
            },
        ],
    },


    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                TEST: JSON.stringify('test'),
            },
        }),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.ejs',
            favicon: 'src/assets/favicon.ico',
            inject: true,
        }),
    ],

    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        port: 3000,
    },

    devtool: 'source-map',
};
