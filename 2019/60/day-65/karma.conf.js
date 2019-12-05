const process = require('process');
process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = config => {
  config.set({
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      'cart.js',
      'day.js'
    ],
    preprocessors: {
      'cart.js': ['webpack', 'coverage'],
      'day.js': ['webpack']
    },
    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.(cart.js|day.js)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ["@babel/preset-env", {
                    "targets": { "browsers": ["last 2 chrome versions"] }
                  }]
                ]
              }
            }
          }
        ]
      },
      watch: true
    },
    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    }
  });
};
