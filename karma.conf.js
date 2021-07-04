const path = require('path');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-requirejs'),
      require('karma-babel-preprocessor'),
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-verbose-reporter'),
    ],
    files: ['test/setupTests.js', 'test/**/*.js'],
    exclude: [],
    preprocessors: {
      'test/**/*.js': 'babel',
    },
    babelPreprocessor: {
      options: {
        presets: ['@babel/preset-react'],
      },
    },
    reporters: ['verbose'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'ChromeHeadless'],
    browsers: ['Chrome_with_devtools' /* , 'ChromeHeadless' */],
    customLaunchers: {
      Chrome_with_devtools: {
        base: 'Chrome',
        flags: ['--auto-open-devtools-for-tabs'],
        chromeDataDir: path.resolve(__dirname, '.chrome'),
      },
    },
    singleRun: false,
    concurrency: Infinity,
  });
};
