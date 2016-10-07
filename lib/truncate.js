function truncate(string, maxLength) {
  if (string.length > maxLength) {
    return `${string.substring(0, maxLength)}&hellip;`;
  }
  return string;
}

module.exports = truncate;
