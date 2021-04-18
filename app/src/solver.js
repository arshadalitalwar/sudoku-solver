function solver(arr) {
  function solve(arr, c) {
    if (c === toFill.length) {
      return true;
    } else {
      let i = toFill[c][0];
      let j = toFill[c][1];
      for (let choice = 1; choice < 10; choice++) {
        if (check(i, j, choice)) {
          arr[i][j] = choice;
          let possible = solve(arr, c + 1);
          if (possible) {
            return true;
          } else {
            arr[i][j] = 0;
          }
        }
      }
    }
    return false;
  }

  function check(x, y, e) {
    let r = Math.floor(x / 3) * 3;
    let c = Math.floor(y / 3) * 3;

    for (let i = 0; i < 9; i++) {
      if (arr[x][i] === e) {
        return false;
      }
    }
    for (let i = 0; i < 9; i++) {
      if (arr[i][y] === e) {
        return false;
      }
    }
    for (let i = r; i < r + 3; i++) {
      for (let j = c; j < c + 3; j++) {
        if (arr[i][j] === e) {
          return false;
        }
      }
    }
    return true;
  }
  let toFill = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == 0) {
        toFill.push([i, j]);
      }
    }
  }
  if (solve(arr, 0)) {
    return arr;
  } else {
    return false;
  }
}
module.exports = solver;
