'use strict';

var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');

module.exports = function(gulp, globals) {
  var processors = [];
  var prefixer = autoprefixer({
    browsers: ['last 4 versions']
  });

  processors.push(prefixer);
  processors.push(mqpacker);
  processors.push(csswring);

  return gulp.task('postcss', function() {
    return gulp.src(globals.options.src.css + '/**/*.css')
      .pipe(globals.plugins.sourcemaps.init())
      .pipe(globals.plugins.postcss(processors))
      .pipe(globals.plugins.sourcemaps.write())
      .pipe(gulp.dest(globals.options.src.css))
      .pipe(globals.plugins.browserSync.stream());
  });
};
