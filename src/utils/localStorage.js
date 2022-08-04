export function getStoredValue(key) {
  const savedValue = localStorage.getItem(key);
  const parsedValue = JSON.parse(savedValue);
  return parsedValue;
}

export function storeValue(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
