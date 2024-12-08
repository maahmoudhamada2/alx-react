const path = require('path');
const { resourceLimits } = require('worker_threads');

module.exports = {
    entry: path.resolve(__dirname, 'js', 'dashboard_main.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.jpg$/i,
                use: ['file-loader', 'image-webpack-loader']
            }
        ]
    }
}