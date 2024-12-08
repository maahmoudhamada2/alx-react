const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '../src', 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, '../dist'),
        open: true,
        hot: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|ico)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../dist', 'index.html'),
        favicon: path.resolve(__dirname, '../dist', 'favicon.ico')
    })]
}