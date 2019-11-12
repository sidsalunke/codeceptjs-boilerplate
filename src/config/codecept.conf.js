exports.config = {
  tests: '../specs/*.spec.js',
  output: '../output',
  helpers: {
    WebDriver: {
      url: 'https://www.google.com/',
      browser: 'chrome',
      smartWait: 5000,
      restart: false,
      timeouts: {
        "script": 60000,
        "page load": 10000
      }
    }
  },
  include: {
    I: '../steps/steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-boilerplate'
}