var recursive = require('recursive-readdir');
var options = require('../_shared/options.js');
var path = options.src.projectRoot + options.src.data;

function getName(filename) {
  return filename.replace(/.*\/data\//g, '');
}
function getJSON(filename) {
  var name = getName(filename);
  return require(filename);
}

recursive(path, function(err, files) {
  var regex = new RegExp(/\//);

  files = files.reduce(function (current, item) {
    var name = getName(item);
    current[name] = current[name] || {};

    if (regex.test(name)) {

    }

    return current;

  }, {});

  console.log(files);
});
