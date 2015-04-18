var TAU = Math.PI*2;
module.exports = hsv2rgb;

function set(r, g, b, out) {
  out[0] = Math.round(r * 255);
  out[1] = Math.round(g * 255);
  out[2] = Math.round(b * 255);
}

function hsv2rgb(h, s, v, out) {
  out = out || [0, 0, 0];

  // Grey
  if (!s) {
    out[0] = out[1] = out[2] = Math.ceil(v * 255);
  } else {
    var b = ((255 - s) * v)>>8;
    switch(Math.ceil(h/60)) {
      case 0: set(v, (((v-b)*h)/60)+b, b, out); break;
      case 1: set(((v-b)*(60-(h%60)))/60+b, v, b, out); break;
      case 2: set(b, v, (((v-b)*(h%60))/60)+b, out); break;
      case 3: set(b, (((v-b)*(60-(h%60)))/60)+b, v, out); break;
      case 4: set((((v-b)*(h%60))/60)+b, b, v, out); break;
      case 5: set(v, b, (((v-b)*(60-(h%60)))/60)+b, out); break;
    }
  }
  return out;
}

