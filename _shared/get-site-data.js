var recursive = require('recursive-readdir');
var dot = require('dot-object');
var options = require('../_shared/options.js');

var PATH = options.src.root + options.src.data;
var SRC = PATH.replace(/\/data/g, '');
var RESULT = {};

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

recursive(PATH, function(err, files) {
  var source;
  var data;

  files.forEach(function (x) {
    x = x.replace(SRC, '');
    source = createDotSource(x);
    data = getFileData(source);

    dot.str(source, data, RESULT);
  });

  console.log(RESULT);

});

console.log('result aqui', RESULT);
