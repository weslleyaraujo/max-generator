'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var options = require('../_shared/options.js');

module.exports = function() {
  return gulp.task('develop', function() {
    gulp.start('sass');
    gulp.watch(options.src.sass, ['sass']);
  });
};
