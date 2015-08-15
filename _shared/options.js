var yargs = require('yargs').argv;

module.exports = {
  project: yargs.project ? yargs.project : 'example',
  config: yargs.config ? yargs.config : 'config-development.json'
};