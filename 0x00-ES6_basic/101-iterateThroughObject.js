export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  const { length } = reportWithIterator;

  for (let idx = 0; idx < length; idx += 1) {
    result += idx !== length - 1
      ? `${reportWithIterator[idx]} | `
      : reportWithIterator[idx];
  }

  return result;
}
