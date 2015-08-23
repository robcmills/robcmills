// Generated by CoffeeScript 1.9.3
var compileCoffee, compileCss, compileJade, cp, errBell, fs, path;

fs = require('fs');

path = require('path');

cp = require('child_process');

errBell = function(data) {
  return console.log(data.toString(), '\u0007');
};

compileCoffee = function(filename) {
  var ps;
  console.log('compileCoffee', filename);
  ps = cp.spawn('coffee', ['-cb', filename]);
  return ps.stderr.on('data', function(data) {
    return errBell(data);
  });
};

compileJade = function() {
  var ps;
  console.log('compileJade');
  ps = cp.spawn('jade', ['-P', '-o', './dist', './jade/index.jade']);
  return ps.stderr.on('data', function(data) {
    return errBell(data);
  });
};

compileCss = function(filename) {
  var ps;
  console.log('compileCss', filename);
  ps = cp.spawn('stylus', ['css']);
  return ps.stderr.on('data', function(data) {
    return errBell(data);
  });
};

fs.watch('./watch.coffee', {
  recursive: false
}, function(event, filename) {
  console.log('event', event);
  if (event === 'change') {
    return compileCoffee(filename);
  }
});

fs.watch('./jade', {
  recursive: true
}, function(event, filename) {
  if (event === 'change') {
    return compileJade;
  }
});
