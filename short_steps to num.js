function shortestStepsToNum(num) {
  let steps = 0;
  let n = num;
  while (n > 1) {
    if (n % 2 !== 0) {
      n = n - 1;
      steps++;
    } else {
      n = n / 2;
      steps++;
    }
  }
  return steps;
}
