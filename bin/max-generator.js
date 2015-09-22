#!/usr/bin/env node

var path = require('path');
var fs = require('fs');
var pkg = require( path.join(__dirname, '../package.json') );
var program = require('commander');
var ncp = require('ncp').ncp;
var templatePath = path.join(path.dirname(fs.realpathSync(__filename)), '/../_template');
var cwd = process.cwd() + '/';

program
  .version(pkg.version)
  .description(pkg.description)
  .option('-n', '--name <name>', 'The name for your project')
  .action(function (name) {
    console.log('[max-generator] Starting your project..');
    ncp(templatePath, cwd + name, function (err) {
      if (err) {
        return console.error('[max-generator] Error: ', err);
      }

      console.log('[max-generator] Done!');
      console.log('[max-generator] your project was created at ', cwd + name);
    });

  })
  .parse(process.argv);

if (!program.args.length) program.help();
