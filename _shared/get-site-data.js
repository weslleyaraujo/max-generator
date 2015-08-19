var recursive = require('recursive-readdir-sync');
var dot = require('dot-object');
var options = require('../_shared/options.js');

var PATH = options.src.root + options.src.data;
var SRC = PATH.replace(/\/data/g, '');

function createDotSource(value) {
  return value
    .replace(/\//g, '.')
    .replace(/\.json/g, '');
}

function getFileData(source) {
  var itens = source.split(/\./);
  var filename;

  itens.shift();
  filename = itens.join('/');

  return require(PATH +  filename + '.json');
}

module.exports = recursive(PATH).reduce(function (curr, x) {
  var source;

  x = x.replace(SRC, '');
  source = createDotSource(x);
  dot.str(source, getFileData(source), curr);

  return curr;

}, {});
