
let sum = 0;
function sumOfN(num) {
  if (num === 0) {
    console.log(sum);
    return;
  }
  sum += num;
  num--;
  sumOfN(num);
}

// ─────────────────────────────────────────
// Test / Run
// ─────────────────────────────────────────

let n = 10;
sumOfN(n);
