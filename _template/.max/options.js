'use strict';

var yargs = require('yargs').argv;
var project = yargs.project ? yargs.project : 'example';
var config = yargs.config ? yargs.config : 'config-development.json';

module.exports = {
  project: project,
  config: config,
  src: {
    root: __dirname.replace(/\/_shared/g, '/'),
    project: '_sites/' + project,
    dest: '_sites/' + project + '/dist',
    javascripts: {
      all: '_sites/' + project + '/src/assets/javascripts/**/*.js',
      main: '_sites/' + project + '/src/assets/javascripts/index.js',
      dest: '_sites/' + project + '/dist/assets/javascripts/',
      bundle: 'bundle.js',
    },
    sass: '_sites/' + project + '/src/assets/sass/**/*.sass',
    css: '_sites/' + project + '/dist/assets/css',
    templates: '_sites/' + project + '/src/templates/**/*.ejs',
    pages: '_sites/' + project + '/src/*.ejs',
    data: '_sites/' + project + '/src/data/',
  }
};
