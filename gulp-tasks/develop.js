'use strict';

module.exports = function(gulp, globals) {

  return gulp.task('develop', function() {

    globals.plugins.browserSync.init({
      server: globals.options.src.root + globals.options.src.project,
      tunnel: true,
      open: false
    });

    // FIXME: should run all necessary tasks at beginin
    //
    gulp.watch(globals.options.src.sass, ['sass', 'postcss']);
    gulp.watch(globals.options.src.javascripts.all, ['lint']);

    gulp.tasks.javascripts.fn(true);

    gulp.watch([
      globals.options.src.pages,
      globals.options.src.templates,
      globals.options.src.data + '**/*.json',
    ], ['ejs']);
  });
};
