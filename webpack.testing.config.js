'use strict';
var webpack = require('webpack');

module.exports = function (_path) {
    return {
        // devtool: 'source-map',
        // entry: './source/index.js',
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['latest']
                    }
                }
            ],
        },
        resolve: {
            extensions: ['', '.js']
        }
    };
};
