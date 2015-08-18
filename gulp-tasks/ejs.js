/*
 * TODO: Render specific file only
 */
'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var options = require('../_shared/options.js');
var getSiteData = require('../_shared/get-site-data.js');

module.exports = function() {

  return gulp.task('ejs', function() {
    return gulp.src(options.src.pages)
      .pipe(plugins.plumber())
      .pipe(plugins.ejs({
        test: 'LOVELY DAY'
      }).on('error', function(err) {
        plugins.notify().write({
          title: 'Error compiling ejs.',
          message:  '' // err.message
        });

        /*
         * FIXME: Fix bug when trying to log an error with
         * `<%=` characters, see: _sites/example/src/example.ejs
         */
      }))
      .pipe(gulp.dest(options.src.root));
  });
};
