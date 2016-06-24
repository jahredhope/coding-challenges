function sc(a, t) {
  var n = a.length;
  var c = 0;
  while(n !== 0) {
      a[--n] <= 0 && c++;
  }
  return c < t;
}

module.exports = {
  sc
}
