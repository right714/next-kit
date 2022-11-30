exports.toUpperCaseFirstChar = (str) => {
  const firstChar = str.slice(0, 1).toUpperCase();

  return firstChar + str.slice(1);
}
