var recursive = require('recursive-readdir');
var options = require('../_shared/options.js');
var path = options.src.projectRoot + options.src.data;

function getJSON(filename) {
  var name = filename.replace(/.*\/data\//g, '');

  if (name.match(/\//)) {
    console.log(name);
  }

  return require(filename);
}

recursive(path, function(err, files) {
  var result = files.reduce(function (curr, filename) {
    curr[filename] = getJSON(filename);
    return curr;
  }, {});

  console.log(result);
});
