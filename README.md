# hsv2rgb

convert from hsv/hsb to rgb

## install

`npm install hsv2rgb`

## use

```javascript
var hsv = require('hsv2rgb');

// using a pre-allocated array
var rgb = [0, 0, 0, 1];
hsv(300, 1, 1.0, rgb)
console.log(rgb) // [ 255, 0, 255, 1]

// or without
console.log(hsv(300, 1, 1.0)) // [ 255, 0, 255, 1]
```

### api signature

__hsv__(`h`, `s`, `v` [, `out`])

* `h` is the hue
* `s` is the saturation
* `v` is the value
* `out` is an optional 3+ component array (hsv2rgb will only update the first 3 items)

## license

[MIT](LICENSE.txt)
