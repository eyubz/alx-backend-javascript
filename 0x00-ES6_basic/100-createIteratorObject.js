export default function createIteratorObject(report) {
  const array = [];
  for (const r of Object.values(report.allEmployees)) {
    for (const val of r) {
      array.push(val);
    }
  }
  return array;
}
