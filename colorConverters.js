// function hsl2rbg(h, s, l) {
//   //hsl param as %
//   var r = 0,
//     g = 0,
//     b = 0,
//     t1 = 0,
//     t2 = 0,
//     tR = 0,
//     tG = 0,
//     tB = 0;
//   //convert to floating point between 0-1
//   s = s / 100;
//   l = l / 100;
//   //no saturation
//   if (s === 0) {
//     return [Math.round(l * 255), Math.round(l * 255), Math.round(l * 255), Math.round(l * 255)];
//   }
//   //there is saturation
//   t1 = (l < .5 ? t1 = l * (1.0 + s) : t1 = l + s - l * s);
//   t2 = 2 * l - t1;
//   //hue
//   h = h / 360;
//   tR = h + 1 / 3;
//   tB = h;
//   tG = h - 1 / 3;

//   function convertColor(color) {
//     var result;
//     if (color < 0) {
//       color = color + 1;
//     } else if (color > 1) {
//       color = color - 1;
//     }
//     if (6 * color < 1) {
//       result = t2 + (t1 - t2) * 6 * color;
//     } else if (2 * color < 1) {
//       result = t1;
//     } else if (3 * color < 2) {
//       result = t2 + (t1 - t2) * (0.666 - color) * 6;
//     } else {
//       result = t2;
//     }
//     return Math.round(result * 255);
//   }
//   r = convertColor(tR);
//   g = convertColor(tB);
//   b = convertColor(tG);
//   return [r, g, b, 255];
// }

function hsl2rbg (h, s, l) {

    var r, g, b, m, c, x

    if (!isFinite(h)) h = 0
    if (!isFinite(s)) s = 0
    if (!isFinite(l)) l = 0

    h /= 60
    if (h < 0) h = 6 - (-h % 6)
    h %= 6

    s = Math.max(0, Math.min(1, s / 100))
    l = Math.max(0, Math.min(1, l / 100))

    c = (1 - Math.abs((2 * l) - 1)) * s
    x = c * (1 - Math.abs((h % 2) - 1))

    if (h < 1) {
        r = c
        g = x
        b = 0
    } else if (h < 2) {
        r = x
        g = c
        b = 0
    } else if (h < 3) {
        r = 0
        g = c
        b = x
    } else if (h < 4) {
        r = 0
        g = x
        b = c
    } else if (h < 5) {
        r = x
        g = 0
        b = c
    } else {
        r = c
        g = 0
        b = x
    }

    m = l - c / 2
    r = Math.round((r + m) * 255)
    g = Math.round((g + m) * 255)
    b = Math.round((b + m) * 255)

    return [r, g, b]

}


function rgba2hslString(rgba) {
  return rgba2hsl(rgba).toString();
}
function rgba2string(rgb, a) {
  return "rgba("+ rgb[0] +","+ rgb[1] +","+ rgb[2] +","+ a +")";
}

function rgba2hsl(rbg) {
  var r = rbg[0] / 255,
    g = rbg[1] / 255,
    b = rbg[2] / 255,
    max,
    min,
    h,
    s,
    l;
  max = Math.max(r, g, b);
  min = Math.min(r, g, b);
  l = (max + min) / 2;
  if (min == max) {
    s = 0;
  } else {
    s = (l < .5 ? s = (max - min) / (max + min) : (max - min) / (2.0 - max - min));
  }
  if (r == max) {
    h = (g - b) / (max - min);
  } else if (g == max) {
    h = 2.0 + (b - r) / (max - min);
  } else if (b == max) {
    h = 4.0 + (r - g) / (max - min);
  }
  h = h * 60;
  if (h < 0) {
    h = 0;
  } else if (h > 360) {
    h = 360;
  }
  h = Math.round(h);
  s = Math.round(s * 100);
  l = Math.round(l * 100);
  if (isNaN(h)) h = 0;
  if (isNaN(s)) s = 0;
  if (isNaN(l)) l = 0;
  return [h, s, l];
}

function rgbToHex(rgb) {
  function c(v) {
    var hex = v.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }
  return "#" + c(rgb[0]) + c(rgb[1]) + c(rgb[2]);
}