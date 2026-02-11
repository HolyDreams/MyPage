var path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCss = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        'polyfills': '@babel/polyfill',

        'styles': './wwwroot/styles/site.scss',
        'components': './wwwroot/components/components.scss',

        'main': './wwwroot/scripts/main.js',

        'my-page': './wwwroot/scripts/view-models/my-page/my-page.js'
    },
    output: {
        path: path.resolve(__dirname, 'wwwroot/scripts/dist'),
        publicPath: '/dist/',
        filename: process.env.npm_lifecycle_event === 'build' ? '[name].js' : '[name].[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCss({
            filename: 'style.css'
        })
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['.js', '.vue', '.json']
    }
}