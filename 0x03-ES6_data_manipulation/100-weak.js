export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1 || 1);
};
