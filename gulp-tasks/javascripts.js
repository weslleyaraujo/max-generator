'use strict';

var browserify = require('browserify');
var sourceStream = require('vinyl-source-stream');
var babelify = require('babelify');
var watchify = require('watchify');

module.exports = function(gulp, globals) {

  var bundler;

  function update() {
    bundler.bundle()
      .on('error', function (err) {
        globals.plugins.util.log(err.toString());
      })
      .pipe(sourceStream(globals.options.src.javascripts.bundle))
      // .pipe(globals.plugins.if, something())
      .pipe(gulp.dest(globals.options.src.javascripts.dest));
  };

  return gulp.task('javascripts', function() {

    bundler = browserify(globals.options.src.javascripts.main, {
      cache: {},
      packageCache: {},
      fullPaths: true
    }).transform(babelify)

    // watch
    bundler = watchify(bundler);

    bundler.on('update', function () {
      update();
    }).on('log', globals.plugins.util.log);

    update();

  });
};
