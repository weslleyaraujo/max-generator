'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

module.exports = function() {
  return gulp.task('default', function() {
    console.log('foo');
  });
};