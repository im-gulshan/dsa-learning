

function countDigits(n) {
  if (n == 0) return 1;
  n = Math.abs(n);

  let counter = 0;
  while (n > 0) {
    n = (n / 10) | 0;
    console.log(n);
    counter++;
  }
  return counter;
}

let number = -982;
console.log("Digits : " + countDigits(number));
