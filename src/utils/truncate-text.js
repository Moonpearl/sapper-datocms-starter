export default text => {
  const match = text.match(/^(.{0,200})\s/);

  if (match) {
    return match[1];
  }

  return text;
}
