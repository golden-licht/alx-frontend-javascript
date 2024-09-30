export default function createIteratorObject(report) {
  const departments = report.allEmployees;
  const iterator = [];

  for (const department in departments) {
    if (Object.hasOwn(departments, department)) {
      iterator.push(...departments[department]);
    }
  }

  return iterator;
}
