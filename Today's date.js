function isToday(data) {
  let today = new Date();
  let result = data.toDateString() == today.toDateString();
  return result;
}
