'use strict';

module.exports = function(gulp, globals) {

  globals.plugins.notify.logLevel(0);

  return gulp.task('lint', function() {
    return gulp.src(globals.options.src.javascripts.all)
      .pipe(globals.plugins.cached('lint'))
      .pipe(globals.plugins.jshint({
        esnext: true
      }))
      .pipe(globals.plugins.jshint.reporter('jshint-stylish'))
      .pipe(globals.plugins.notify(function(file){

        var errors;

        if(file.jshint.success) {
          return;
        }

        errors = file.jshint.results.map(function (data) {
          if (data.error) {
            return '(' + data.error.line + ':' + data.error.character + ') ' + data.error.reason;
          }
        }).join('\n');

        return file.relative + ' => (' + file.jshint.results.length + ' errors) \n' + errors;

      }));
  });
};
