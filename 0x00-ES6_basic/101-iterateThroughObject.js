export default function iterateThroughObject (reportWithIterator) {
  let result = '';
  const { length } = reportWithIterator;

  for (let idx in reportWithIterator) {
    if (Object.hasOwn(reportWithIterator, idx)) {
      idx = Number(idx);

      result += idx !== length - 1
        ? `${reportWithIterator[idx]} | `
        : reportWithIterator[idx];
    }
  }
  return result;
}
