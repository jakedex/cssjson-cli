#!/usr/bin/env node

const argv = require('yargs')
  .usage('Usage: $0 [--to-css] inputFile [--output|-o outputFile]')
  .example('cssjson input.css -o output.json', 'Convert css to json')
  .example('cssjson --to-css input.js -o output.css', 'Convert json to css')
  .demand(1)
  .describe('to-css', 'Convert json input to css output')
  .alias('o', 'output')
  .nargs('o', 1)
  .describe('o', 'Output file (stdout if not provided)')
  .help('h')
  .alias('h', 'help')
  .argv

// const fs = require('fs')
// const s = fs.createReadStream(argv.)
