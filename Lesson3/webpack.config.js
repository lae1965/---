const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniExtractPlugin = require('mini-css-extract-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
//const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: './js/index.js',
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({template: resolve(__dirname, 'index.html')}),
        new MiniExtractPlugin({filename: '[name].[contenthash].css'}),
        new ImageminWebpackPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
        //new BundleAnalyzerPlugin() 
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|mp3|mp4)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                } 
            },
            {
                test: /\.css$/i,
                use: [MiniExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
        hot: true,
        port: 5555
    }
};
