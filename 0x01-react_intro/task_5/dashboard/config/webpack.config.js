const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '../src', 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, '../dist'),
        open: true,
        hot: true,
        port: 8567
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|ico)$/i,
                use: ['file-loader', 'image-webpack-loader']
            }
        ]
    }
}