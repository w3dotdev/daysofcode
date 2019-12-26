require('@babel/register')({
  babelrc: false,
  presets: ['@babel/preset-env'],
});
require('@babel/polyfill');
require('./server');
