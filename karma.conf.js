module.exports = function (config) {
  config.set({
      browsers: ['ChromeHeadless', 'FirefoxHeadless'], 
      failOnEmptyTestSuite: false,
      singleRun: true,
      frameworks: ['mocha'],
      plugins: [
        'karma-firefox-launcher',
        'karma-chrome-launcher',
        'karma-mocha',
        'karma-sourcemap-loader'
      ],
      files: [
        'test/bundle.js'
      ],
      reporters: ['progress']
  });
};