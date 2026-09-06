

function nestedLoop() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      console.log("*");
    }
    console.log("==================");
  }
}

function nestedLoop2() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j <= i; j++) {
      console.log("i=" + i + ", j=" + j);
    }
    console.log("==================");
  }
}

function nestedLoop3() {
  for (let i = 0; i < 4; i++) {
    for (let j = i; j >= 0; j--) {
      console.log("i=" + i + ", j=" + j);
    }
    console.log("==================");
  }
}

function nestedLoop4() {
  for (let i = 5; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      console.log("i=" + i + ", j=" + j);
    }
    console.log("==================");
  }
}


nestedLoop4();
