'use strict';

module.exports = function(gulp, globals) {
  return gulp.task('develop', function() {
    gulp.start('sass');

    gulp.watch(globals.options.src.sass, ['sass']);
    gulp.watch(globals.options.src.javascripts, ['lint']);

    gulp.watch([
      globals.options.src.pages,
      globals.options.src.templates,
      globals.options.src.data + '**/*.json',
    ], ['ejs']);
  });
};
