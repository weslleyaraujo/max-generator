'use strict';

module.exports = function(gulp, globals) {
  gulp.task('sass', function() {
    gulp.src(globals.options.src.sass)
      .pipe(globals.plugins.sass().on('error', function(err) {
        plugins.notify().write({
          title: 'Error compiling sass.',
          message: err.message
        });
      }))
      .pipe(gulp.dest(globals.options.src.css));
  });
};
