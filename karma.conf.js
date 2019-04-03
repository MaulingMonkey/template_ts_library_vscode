module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: ['tests/*.js'],
    preprocessors: {},
    reporters: ['progress'], // or 'dots'
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO, // config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    autoWatch: true,
    browsers: ['ChromeHeadless', 'FirefoxHeadless'],
    singleRun: false,
    concurrency: Infinity,
    preprocessors: {
      '**/*.js': ['sourcemap']
    },
  })
}
