
// print hellow world 20 times
function printHelloWorld20Times() {
  for (let i = 0; i < 20; i++) {
    console.log("Hello World : " + (i + 1));
  }
}

for (let i = 2; i < 9; i = i + 2) {
  console.log("Hello World : " + (i));
}
console.log("***********************************************i= i+2\n");

for (let i = 5; i > 0; i = i - 1) {
  console.log("Hello World : " + (i));
}
console.log("***********************************************i= i-1\n");


let arr = [1, 3, 4, 33, 44, 22, 453, 2232];
for (let i = 0; i < arr.length; i++) {
  let temp = arr[i] % 2;
  if (temp == 0) {
    console.log(arr[i] + ", is a even number");
  } else {
    console.log(arr[i] + ", is a odd number");
  }

}
console.log("Print all the even number fo array\n");

// ─────────────────────────────────────────
// Test / Run
// ─────────────────────────────────────────

printHelloWorld20Times();
