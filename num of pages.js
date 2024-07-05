function amountOfPages(sum) {
  let pages = 0;

  while (sum > 0) {
    pages++;
    sum -= pages.toString().length;
  }

  return pages;
}
