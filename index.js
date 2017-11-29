// roll function by pseudophpt

'use strict';

var common = require('../../engine/postingOps').common;

exports.engineVersion = '1.8';

var rollFunction = function(match) {
  var random = Math.floor(Math.random() * 100000000);
  var hue = Math.floor(random * 360 / 100000000);
  var hsl = 'hsl(' + hue + ', 100%, 50%)';
  return '<span class=\"roll\" style="background:' + hsl + ';\"> roll: ' + random + '</span>';
};


exports.init = function() {

  var originalMarkdown = common.markdownText;

  var originalProcessLine = common.processLine;

  common.processLine = function(split, replaceCode) {
    split = originalProcessLine(split, replaceCode);

    split = split.replace(/%roll/, rollFunction);

    return split;
  };
};


