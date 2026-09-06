

function isPalindrom(n) {
  let r = 0, original = n;

  while (n != 0) {
    let t = n % 10;
    r = (r * 10) + t;

    n = (n / 10) | 0;
  }

  return original == r;
}

let num = 12231;
console.log(isPalindrom(num));
