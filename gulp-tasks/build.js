'use strict';

module.exports = function(gulp, globals) {
  return gulp.task('build', ['javascripts', 'sass'], function() {
    console.log('awesome');
  });
};
