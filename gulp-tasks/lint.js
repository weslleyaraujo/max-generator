'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var options = require('../_shared/options.js');

module.exports = function() {

  plugins.notify.logLevel(0);

  return gulp.task('lint', function() {
    return gulp.src(options.src.javascripts)
      .pipe(plugins.jshint())
      .pipe(plugins.jshint.reporter('jshint-stylish'))
      .pipe(plugins.notify(function(file){
        var errors;

        if(file.jshint.success) {
          return;
        }

        errors = file.jshint.results.map(function (data) {
          if (data.error) {
            return '(' + data.error.line + ':' + data.error.character + ') ' + data.error.reason;
          }
        }).join('\n');

        return file.relative + ' => (' + file.jshint.results.length + ' errors) \n' + errors;

      }));
  });
};
