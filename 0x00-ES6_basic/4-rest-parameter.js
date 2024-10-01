export default function returnHowManyArguments(...rest) {
  let count = 0;

  for (let i = 0; i < rest.length; i += 1) {
    count += 1;
  }
  return count;
}
