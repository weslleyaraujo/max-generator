var yargs = require('yargs').argv;
var project = yargs.project ? yargs.project : 'example';
var config = yargs.config ? yargs.config : 'config-development.json';

module.exports = {
  project: project,
  config: config,
  src: {
    root: '_sites/' + project + '/',
    javascripts: '_sites/' + project + '/src/assets/javascripts/**/*.js',
    sass: '_sites/' + project + '/src/assets/sass/**/*.sass',
    css: '_sites/' + project + '/dist/css',
    templates: '_sites/' + project + '/src/templates/**/*.ejs',
    pages: '_sites/' + project + '/src/*.ejs',
  }
};
