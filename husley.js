(function() {
  this.HUSLey = function(h, s, l) {
    s *= (l < .5 ? l : 1 - l) * 255;
    // Compute the base RGB values
    var r = s * Math.cos(h);
    var g = s * Math.cos(h - 2 * Math.PI / 3);
    var b = s * Math.cos(h - 4 * Math.PI / 3);
    // Lightness adjustment
    l = r * .299 + g * .587 + b * .114 - l * 255;
    // Adjust, round & clamp the instensity of each components
    return [r <= l ? 0 : r >= 255 + l ? 255 : Math.round(r - l),
            g <= l ? 0 : g >= 255 + l ? 255 : Math.round(g - l),
            b <= l ? 0 : b >= 255 + l ? 255 : Math.round(b - l)];
  };
}).call(window.module && window.module.exports || window);