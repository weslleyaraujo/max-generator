#!/usr/bin/env node

var path = require('path');
var fs = require('fs');
var pkg = require( path.join(__dirname, '../package.json') );
var program = require('commander');
var ncp = require('ncp').ncp;
var fullpath;
= ;

program
  .version(pkg.version)
  .description(pkg.description)
  .option('-n', '--name <name>', 'The name for your project')
  .action(function (name) {

    fullpath = path.join(path.dirname(fs.realpathSync(__filename)), name);

    ncp('../_template', fullpath, function (err) {
      if (err) {
        return console.error(err);
      }

      console.log('done!\n');
      console.log('your project was created at ', fullpath);
    });

  })
  .parse(process.argv);

if (!program.args.length) program.help();
