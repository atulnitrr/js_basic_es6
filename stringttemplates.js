function getMessage() {
  const year = (new Date()).getFullYear();
  // return "year is " + year;
  return `This year is  ${new Date().getFullYear()}`
}

const res = getMessage();

console.log(res);