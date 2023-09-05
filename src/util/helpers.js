
export function invert(color) {
    if (color.indexOf('#') === 0) {
      color = color.slice(1);
    }
    // convert 3-digit color to 6-digits.
    if (color.length === 3) {
        color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
    }
    if (color.length !== 6) {
        throw new Error('Invalid color color.');
    }
    // invert color components
    var r = (255 - parseInt(color.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(color.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(color.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + padZero(r) + padZero(g) + padZero(b);
  } 

export function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}