
fs = require 'fs'
path = require 'path'
cp = require 'child_process'
# u = require 'underscore'


errBell = (data) ->
  console.log data.toString(), '\u0007'


compileCoffee = (filename) -> 
  console.log 'compileCoffee', filename
  ps = cp.spawn 'coffee', ['-cb', filename]
  ps.stderr.on 'data', (data) -> 
    errBell data

compileJade = () -> 
  console.log 'compileJade'
  ps = cp.spawn 'jade', [
    '-P', 
    '-o', './dist',
    './jade/index.jade', 
  ]
  ps.stderr.on 'data', (data) -> 
    errBell data

compileCss = (filename) -> 
  console.log 'compileCss', filename
  ps = cp.spawn 'stylus', ['css']
  ps.stderr.on 'data', (data) -> 
    errBell data
  

fs.watch './watch.coffee', recursive: false, (event, filename) ->
  console.log 'event', event
  if event == 'change' 
    compileCoffee filename

fs.watch './jade', recursive: true, (event, filename) ->
  if event == 'change' 
    compileJade


# when '.styl' then compileCss filename
