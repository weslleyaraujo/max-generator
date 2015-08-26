'use strict';

var browserify = require('browserify');
var sourceStream = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var babelify = require('babelify');
var watchify = require('watchify');

module.exports = function(gulp, globals, develop) {
  var bundler;
  var isDevelop;

  function update(develop) {
    bundler.bundle()
      .on('error', function (err) {
        globals.plugins.util.log(err.toString());
      })
      .pipe(sourceStream(globals.options.src.javascripts.bundle))
      .pipe(buffer())
      .pipe(isDevelop ? globals.plugins.sourcemaps.init() : globals.plugins.util.noop())
      .pipe(isDevelop ? globals.plugins.util.noop() : globals.plugins.uglify())
      .pipe(isDevelop ? globals.plugins.sourcemaps.write() : globals.plugins.util.noop())
      .pipe(gulp.dest(globals.options.src.javascripts.dest));
  };

  return gulp.task('javascripts', function() {
    isDevelop = globals.options.currentTask === 'develop';

    bundler = browserify(globals.options.src.javascripts.main, {
      cache: {},
      packageCache: {},
      fullPaths: true
    }).transform(babelify);

    /*
     * NOTE: the watchify will do the "watch" for js files
     */
    if(isDevelop) {
      bundler = watchify(bundler);
    }

    bundler.on('update', function () {
      update();
    }).on('log', globals.plugins.util.log);

    update(develop);

  });
};
