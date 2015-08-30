'use strict';

module.exports = function(gulp, globals) {
  return gulp.task('htmlmin', function() {
    return gulp.src(globals.options.src.project + '/*.html')
      .pipe(globals.plugins.htmlmin({
        collapseWhitespace: true
      }))
      .pipe(gulp.dest(globals.options.src.project))
  });
};
