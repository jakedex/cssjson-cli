[![npm version](https://badge.fury.io/js/cssjson-cli.svg)](https://badge.fury.io/js/cssjson-cli)

# cssjson-cli
A CLI utility for [CSSJSON](https://github.com/aramk/CSSJSON). Converts the contents of a CSS file to JSON (or vice-versa).

## Installation
```
$ npm install -g cssjson-cli
```

## Usage

```
$ cssjson input_file [--to-css] [--output|-o output_file]
```
`cssjson` converts css to JSON. To convert JSON to CSS, use the `--to-css` flag.  

By default, `cssjson` outputs to `stdout`. You can specify an output file with the `--output` flag:
```
$ cssjson style.css --output style.js
```  

It converts a file like this:

```css
.btn {
  background: #bbb;
  padding: 0.5rem;
  font-size: 1rem;
}

.btn-primary {
  background: red;
  color: #fff;
}
```

into one like this:
```json
{
  "children": {
    ".btn": {
      "children": {},
      "attributes": {
        "background": "#bbb",
        "padding": "0.5rem",
        "font-size": "1rem"
      }
    },
    ".btn-primary": {
      "children": {},
      "attributes": {
        "background": "red",
        "color": "#fff"
      }
    }
  },
  "attributes": {}
}
```

## Examples
CSS -> JSON
```
cssjson input.css -o output.json
```
JSON -> CSS
```
cssjson input.js --to-css -o output.css
```

## Options
### to-css
####`--to-css`   
Convert JSON -> CSS.

### output
####`-o, --output [output_file]`   
A target file to output the result to. If this flag isn't included, `cssjson` will output to `stdout`.

### help
####`-h, --help`
Show help

## License
[MIT](https://github.com/jakedex/cssjson-cli/blob/master/LICENSE)
