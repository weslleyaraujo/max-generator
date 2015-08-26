'use strict';

var browserify = require('browserify');
var sourceStream = require('vinyl-source-stream');
var babelify = require('babelify');
var watchify = require('watchify');

module.exports = function(gulp, globals, develop) {
  var bundler;

  function update(develop) {
    bundler.bundle()
      .on('error', function (err) {
        globals.plugins.util.log(err.toString());
      })
      .pipe(sourceStream(globals.options.src.javascripts.bundle))
      // .pipe(globals.plugins.if, something())
      // .pipe(globals.plugins.if, something())
      .pipe(gulp.dest(globals.options.src.javascripts.dest));
  };

  return gulp.task('javascripts', function(develop) {

    bundler = browserify(globals.options.src.javascripts.main, {
      cache: {},
      packageCache: {},
      fullPaths: true
    }).transform(babelify);

    // watch
    if(develop === true) {
      bundler = watchify(bundler);
      console.log('wooooow');
    }

    bundler.on('update', function () {
      update();
    }).on('log', globals.plugins.util.log);

    update(develop);

  });
};
