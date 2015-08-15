'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var options = require('../_shared/options.js');

module.exports = function() {
  gulp.task('sass', function() {
    gulp.src(options.src.sass)
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass().on('error', function (err) {
        plugins.notify().write({
          title: 'Error compiling sass.',
          message: err.message
        });
      }))
      .pipe(plugins.sourcemaps.write())
      .pipe(gulp.dest(options.src.css));
  });
};
