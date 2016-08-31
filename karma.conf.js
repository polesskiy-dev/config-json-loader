module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],

        files: [
            //{pattern: 'test-context.js'}
            {pattern: 'source/*.spec.js', watched: false},
        ],

        frameworks: ['jasmine'],

        reporters: ['mocha'],

        preprocessors: {
            //'test-context.js': ['webpack']
            'source/*.spec.js': ['webpack']
        },
        plugins: [
            'karma-jasmine', 'karma-mocha',
            'karma-chai',
            'karma-webpack', 'karma-phantomjs-launcher',
            'karma-mocha-reporter'
        ],

        webpack: //webpackConfig
        {
            module: {
                loaders: [
                    {
                        test: /\.js/,
                        exclude: (/node_modules/),
                        loader: 'babel-loader'
                    }
                ]
            }
        }
    });
};
