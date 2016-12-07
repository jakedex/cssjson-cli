#!/usr/bin/env node

const fs = require('fs')
const through2 = require('through2')
const cssjson = require('cssjson')
const argv = require('yargs')
  .usage('Usage: $0 inputFile [--to-css] [--output|-o outputFile]')
  .example('cssjson input.css -o output.json', 'Convert css to json')
  .example('cssjson input.js --to-css -o output.css', 'Convert json to css')
  .demand(1)
  .describe('to-css', 'Convert json input to css output')
  .alias('o', 'output')
  .nargs('o', 1)
  .describe('o', 'Output file (stdout if not provided)')
  .help('h')
  .alias('h', 'help')
  .argv

const toCSS = argv['to-css']
const inputStream = fs.createReadStream(argv._[0])
var outputStream = argv.output ? fs.createWriteStream(argv.output) : process.stdout

var _buffer = []
var convertStream = through2(function (chunk, enc, callback) {
  _buffer.push(chunk.toString('utf8'))
  callback()
}, function (callback) {
  var data = _buffer.join('')
  var convertedObj = toCSS ? cssjson.toCSS(JSON.parse(data)) : JSON.stringify(cssjson.toJSON(data))
  // var converted = new Buffer(convertedObj)
  this.push(convertedObj)
  callback()
})

// pipe it!
inputStream
  .pipe(convertStream)
  .pipe(outputStream)
