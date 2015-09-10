#!/usr/bin/env node

var path = require('path');
var pkg = require( path.join(__dirname, '../package.json') );
var program = require('commander');

program
  .version(pkg.version)
  .description(pkg.description)
  .option('-n', '--name <name>', 'The name for your project')
  .action(function (name) {
    console.log('Creating your project at ' + name)
  })
  .parse(process.argv);

if (!program.args.length) program.help();
