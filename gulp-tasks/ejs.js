'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var options = require('../_shared/options.js');

module.exports = function() {
  return gulp.task('ejs', function() {
    return gulp.src(options.src.pages)
      .pipe(plugins.ejs({
        example: 'foo'
      }))
      .pipe(gulp.dest(options.src.foo));
  });
};
