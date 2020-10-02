const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    mode: 'development',
    // Tell webpack to root file of our server app
    entry: './src/client/client.js',

    // Tell webpack where to put output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    devtool: 'inline-source-map',
    plugins: [
        new MiniCssExtractPlugin()
    ]
};

module.exports = merge(baseConfig, config);