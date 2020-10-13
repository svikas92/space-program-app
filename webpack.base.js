const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    // Tell webpack to run babel on every file it runs through
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: [
                    '@babel/preset-react', ['@babel/env', { targets: { browsers: ['last 2 versions'] } }]
                ]
            }
        }, {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        }]
    }
};