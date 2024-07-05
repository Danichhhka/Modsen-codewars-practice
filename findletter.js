function findMissingLetter(array) {
  let start = array[0].char(0);

  for (let i = 1; i < array.length; i++) {
    if (array[i].char(0) !== start + 1) {
      return String.fromChar(start + 1);
    }
    start++;
  }

  return " ";
}
