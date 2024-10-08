export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';

  const output = [];

  for (const item of set) {
    if (typeof item === 'string' && item.startsWith(startString)) {
      const endPart = item.slice(startString.length);
      output.push(endPart);
    }
  }

  return output.join('-');
}
