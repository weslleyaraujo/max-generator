'use strict';

var browserify = require('browserify');
var sourceStream = require('vinyl-source-stream');
var babelify = require('babelify');
var watchify = require('watchify');

function reBundle(gulp, bundler, source, dest) {
  bundler.bundle()
    .on('error', function () {
      console.log(arguments);
    })
    .pipe(sourceStream(source))
    .pipe(gulp.dest(dest));
}

module.exports = function(gulp, globals) {
  var bundler;

  return gulp.task('javascripts', function() {
    /*
     * REFACTOR: dont know what is this
     */

    bundler = browserify(globals.options.src.javascripts.main, {
      cache: {},
      packageCache: {},
      fullPaths: true
    }).transform(babelify)

    // watch
    // bundler = watchify(bundler);

    bundler.on('update', function () {
      reBundle(gulp, bundler, globals.options.src.javascripts.bundle, globals.options.src.javascripts.dest);
    }).on('log', function () { console.log('awesome log'); });

      reBundle(gulp, bundler, globals.options.src.javascripts.bundle, globals.options.src.javascripts.dest);

  });
};
