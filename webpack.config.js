const path = require('path');
const HtmlWepackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    mode: 'development',
    resolve: {
        extensions: ['.js','.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                }]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                }]
            },
        ]
    },
    plugins: [
        new HtmlWepackPlugin({
            template: './public/index.html',
            filename: './index.html'
        })
    ],
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
      },
}