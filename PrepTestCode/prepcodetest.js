
function map(xs, f) {
  var results = [];
  for(var i = 0; i < xs.length; i++) {
    results.push(f(xs[i]));
  }
  return results;
}

function inc(x) { return x + 1; }

function rest(xs) {
  return xs.slice(1);
}

function cons(x, xs) {
  xs.unshift(x);
  return xs;
}

function map0(xs, f) {
  return [];
}

function map1(xs, f) {
  var results = map0([], f);
  results.unshift(f(xs[0]));
  return results;
}

function map2(xs, f) {
  var results = map1(rest(xs), f);
  results.unshift(f(xs[0]));
  return results;
}

function mapN(xs, f) {
  if (xs.length === 0) {
    return [];
  }

  return cons(f(xs[0]), mapN(rest(xs), f));
}

function map_iterative(xs, f) {

  function iter(xs, f, results) {
    if (xs.length === 0) {
      return results;
    }
    results.push(f(xs[0]));
    return iter(rest(xs), f, results);
  }

  return iter(xs, f, []);
}




function factorial(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return n * factorial(n-1);
}



var n = 5;
factorial(5);
5 * factorial(4);
5 * 4 * factorial(3);
5 * 4 * 3 * factorial(2);
5 * 4 * 3 * 2 * factorial(1);
5 * 4 * 3 * 2 * 1;



