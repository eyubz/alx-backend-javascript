export default function iterateThroughObject(reportWithIterator) {
  let ans = '';
  for (const val of reportWithIterator) {
    ans += ` ${val} |`;
  }
  const len = ans.length;
  return ans.substring(1, len - 2);
}
