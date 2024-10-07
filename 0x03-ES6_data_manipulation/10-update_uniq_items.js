export default function updateUniqueItems(newMap) {
  if (!(newMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [key, value] of newMap) {
    if (value === 1) {
      newMap.set(key, 100);
    }
  }
  return newMap;
}
