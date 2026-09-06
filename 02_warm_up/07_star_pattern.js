

function starPattern1(num) {
  for (let i = 0; i < num; i++) {
    let str = "";
    for (let j = 0; j < num; j++) {
      str += "* ";
    }
    console.log(str);
  }

  console.log("==========================");
}

function starPattern2(num) {
  for (let i = 0; i < num; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str += "* ";
    }
    console.log(str);
  }

  console.log("==========================");
}

function starPattern3(num) {
  for (let i = num; i > 0; i--) {
    let str = "";
    for (let j = 0; j < i; j++) {
      str += "* ";
    }
    console.log(str);
  }

  console.log("==========================");
}

function numberPattern(num) {
  for (let i = 0; i < num; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str += j + 1 + " ";
    }
    console.log(str);
  }

  console.log("==========================");
}

function numberPattern2(num) {
  for (let i = 0; i < num; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str += (i + 1) + " ";
    }
    console.log(str);
  }

  console.log("==========================");
}

function numberPattern3(num) {
  for (let i = 0; i < num; i++) {
    let str = "";
    for (let j = 0; j < (num - i); j++) {
      str += (j + 1) + " ";
    }
    console.log(str);
  }

  console.log("==========================");
}

function starPattern4(num) {
  let t = num;

  for (let i = 0; i < 5; i++) {
    let str = "";

    for (let j = 0; j < 5; j++) {

      if (j + 1 >= t) {
        str += "*";
      } else {
        str += "-";
      }
    }
    console.log(str);
    t--;
  }
  console.log("==========================");
}


function starPattern5(num) {
  for (let i = 0; i < num; i++) {
    let str = "";

    for (let j = 0; j < (num - (i + 1)); j++) {
      str += " ";
    }

    for (let k = 0; k < (i + 1); k++) {
      str += "*";
    }

    console.log(str);
  }
}

function starPattern6(num) {
  for (let i = 0; i < num; i++) {
    let str = "";

    for (let j = 0; j < (i + 1); j++) {
      if (j % 2 == 0) {
        str += "1"
      } else {
        str += "0";
      }
    }

    console.log(str);
  }
}


function starPattern7(num) {
  for (let i = 0; i < num; i++) {
    let str = "";

    for (let j = 0; j < (num - i); j++) {
      if (j % 2 == 0) {
        str += "1"
      } else {
        str += "0";
      }
    }

    console.log(str);
  }
}

// ─────────────────────────────────────────
// Test / Run
// ─────────────────────────────────────────
let n = 5;
// starPattern1(n);
// starPattern2(n);
// starPattern3(n);
// numberPattern(n);
// numberPattern2(n);
// numberPattern3(n);
// starPattern4(n);
// starPattern5(n);
// starPattern6(n);
starPattern7(n);
