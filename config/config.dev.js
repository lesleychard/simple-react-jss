const webpack = require('webpack');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = {
    mode: 'development',
    entry: paths.entry,
    output: {
        filename: '[name].js',
        path: paths.output,
        chunkFilename: '[name].js',
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                use: [
                    {
                        options: {
                            formatter: eslintFormatter,
                            eslintPath: require.resolve('eslint'),
                        },
                        loader: require.resolve('eslint-loader'),
                    },
                ],
                include: paths.src,
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: paths.img,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.html,
        }),
    ],
};
