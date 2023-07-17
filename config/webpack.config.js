const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path')
const fileLoader = require("file-loader");


module.exports = {
    entry: [
        path.resolve(__dirname, '../src/index.jsx'),
    ],
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: [ ".jsx", ".js"]
    },
    //devtool: 'inline-source-map',
    devtool: 'eval-source-map',

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: { },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                        options: {
                            importLoaders: 1,
                            modules: true,
                        },
                    },
                    'postcss-loader', // post process the compiled CSS
                    'sass-loader', // compiles Sass to CSS, using Node Sass by default
                ],
            },
            {
                test: /\.(png|jpe?g)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'url-loader'],
            },

        ],

    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "DEVIDEOS",
            template: "./src/index.html",
            favicon: "./public/favicon.ico"
        }),
    ],
    devServer: {
        port: 3001,
        hot: true,
    },
    mode: 'development'
}