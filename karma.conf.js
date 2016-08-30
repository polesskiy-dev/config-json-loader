module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],

        files: [
            //{pattern: 'test-context.js'}
            {pattern: 'source/*.spec.js', watched: false},
        ],

        frameworks: ['jasmine'],

        preprocessors: {
            //'test-context.js': ['webpack']
            'source/*.spec.js': ['webpack']
        },

        webpack: {
            module: {
                loaders: [
                    {test: /\.js/, exclude: /node_modules/, loader: 'babel-loader'}
                ]
            },
            watch: true
        }
    });
};
