'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var options = require('../_shared/options.js');
var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');

module.exports = function() {
  var processors = [];
  var prefixer = autoprefixer({
    browsers: ['last 4 versions']
  });

  processors.push(prefixer);
  processors.push(mqpacker);
  processors.push(csswring);

  return gulp.task('postcss', function() {
    return gulp.src(options.src.css + '/**/*.css')
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.postcss(processors))
      .pipe(plugins.sourcemaps.write())
      .pipe(gulp.dest(options.src.css));
  });
};
