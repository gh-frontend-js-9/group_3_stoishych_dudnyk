export const loadState = (item: string) => {
  const serializedState = localStorage.getItem(item);
  if (serializedState === null) {
    return undefined;
  }
  return JSON.parse(serializedState);
};
