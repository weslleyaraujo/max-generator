'use strict';

var gulp = require('gulp');
var loader = require('gulp-multiple-loader');
var plugins = require('gulp-load-plugins')({
      pattern: ['gulp-*', 'browser-sync']
    });

var options = require('./_shared/options.js');

loader.initialize(gulp, {
  globals: {
    plugins: plugins,
    options: options,
  }
});
