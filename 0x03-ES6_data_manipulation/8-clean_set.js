export default function cleanSet(set, startString) {
  if (!startString) return '';

  const output = [];

  for (const item of set) {
    if (item.startsWith(startString)) {
      const endPart = item.slice(startString.length);
      output.push(endPart);
    }
  }

  return output.join('-');
}
