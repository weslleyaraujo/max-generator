/**
* TODO: Write site name in gitignore
*/

'use strict';

module.exports = function(gulp, globals) {
  return gulp.task('scaffold', function() {
    return gulp.src('_site-template/**')
      .pipe(gulp.dest('_sites/' + globals.options.project));
  });
};
