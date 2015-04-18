var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var hsv = require('./hsv2rgb');
var tmp = [0, 0, 0];
// add tests
suite
.add('Black (#000000)', function() {
  hsv(0, 0, 0, tmp);
})
.add('White (#FFFFFF)', function() {
  hsv(0, 0, 1.0, tmp);
})
.add('Red (#FF0000)', function() {
  hsv(0, 1, 1.0, tmp);
})
.add('Lime (#00FF00)', function() {
  hsv(120, 1, 1.0, tmp);
})
.add('Blue (#0000FF)', function() {
  hsv(240, 1, 1.0, tmp);
})
.add('Yellow (#FFFF00)', function() {
  hsv(60, 1, 1.0, tmp);
})
.add('Cyan (#00FFFF)', function() {
  hsv(180, 1, 1.0, tmp);
})
.add('Magenta (#FF00FF)', function() {
  hsv(300, 1, 1.0, tmp);
})
.add('Silver (#C0C0C0)', function() {
  hsv(0, 0, .75, tmp);
})
.add('Gray (#808080)', function() {
  hsv(0, 0, .50, tmp);
})
.add('Maroon (#800000)', function() {
  hsv(0, 1, .50, tmp);
})
.add('Olive (#808000)', function() {
  hsv(60, 1, .50, tmp);
})
.add('Green (#008000)', function() {
  hsv(120, 1, .50, tmp);
})
.add('Purple (#800080)', function() {
  hsv(300, 1, .50, tmp);
})
.add('Teal (#008080)', function() {
  hsv(180, 1, .50, tmp);
})
.add('Navy (#000080)', function() {
  hsv(240, 1, .50, tmp);
})

// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
// run async
.run({ 'async': true })
