

function fun(num) {
  if (num === 0) return;
  console.log(num);
  num -= 1;

  fun(num);
}

let count = 0;
function oneToN(num) {
  if (count == num) return;
  console.log(count + 1);
  count++;


  oneToN(num);
}

let n = 10;
// fun(n);
oneToN(n);
