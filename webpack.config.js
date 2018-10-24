const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dotenv = require('dotenv-webpack');

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
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                            },
                        },
                        'postcss-loader',
                    ],
                }),
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                sourceMap: true,
                                importLoaders: 2,
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                            },
                        },
                        'sass-loader',
                        'postcss-loader',
                    ],
                }),
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
        new Dotenv(),

        new ExtractTextPlugin({
            filename: 'styles.css',
            allChunks: true,
            // disable: process.env.NODE_ENV !== 'production',
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
        proxy: {
            '/**': {
                target: '/index.html',
                secure: false,
                bypass(req) {
                    if (req.headers.accept.indexOf('html') !== -1) {
                        return '/index.html';
                    }

                    return '';
                },
            },
        },
    },

    devtool: 'source-map',
};
