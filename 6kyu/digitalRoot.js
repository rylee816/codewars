// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digital_root(n) {
    let digitalRoot = n.toString().split("").map(Number).reduce((a, b) => a + b);
    while(digitalRoot >= 10){
        digitalRoot = digitalRoot.toString().split("").map(Number).reduce((a, b) => a + b);
    }
    return digitalRoot;
  }
