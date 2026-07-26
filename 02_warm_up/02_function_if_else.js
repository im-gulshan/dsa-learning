// find square root of any number
function square(x) {

  let result = x * x;
  return result;
}

// function to find if a person is eligible to vote or not
function isPersonEligibleToVote(age) {
  if (age >= 18) {
    console.log("Person is Eligible To vote");
  } else {
    console.log("Person is not Eligible To vote");
  }
}

// create a function to check if a number is even or odd
function isNumberEvenorOdd(number) {
  if (number % 2 == 0) {
    console.log(number + ", Is Even");
  } else {
    console.log(number + ", Is Odd");
  }
}


// ─────────────────────────────────────────
// Test / Run
// ─────────────────────────────────────────
// let ans = square(3);
console.log(square(-3));
isPersonEligibleToVote(96);
isNumberEvenorOdd(10);
