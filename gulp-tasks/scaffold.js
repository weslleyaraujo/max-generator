/**
* TODO: Write site name in gitignore
*/

'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var options = require('../_shared/options.js');

module.exports = function() {
  return gulp.task('scaffold', function() {
    return gulp.src('_site-template/**')
      .pipe(gulp.dest('_sites/' + options.project));
  });
};