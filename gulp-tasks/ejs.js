/*
 * FIX: When an error is triggered gulp-ejs (or ejs only) creates a
 * .ejs file into the dest dir
 */
'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var options = require('../_shared/options.js');
var getData = require('../_shared/get-site-data.js');

module.exports = function() {
  return gulp.task('ejs', function() {
    return gulp.src(options.src.pages)
      .pipe(plugins.plumber())
      .pipe(plugins.ejs(getData()).on('error', function(err) {
        plugins.notify().write({
          title: 'Error compiling ejs.',
          /*
           * NOTE: this split fixes an error when sending any "<%" to notify..
           */
          message:  err.message.split('<')[0] + '...'
        });
      }))
      .pipe(gulp.dest(options.src.project));
  });
};
