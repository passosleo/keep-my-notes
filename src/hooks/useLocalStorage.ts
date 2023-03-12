export default function useLocalStorage() {
  function storeValue(key: string, value: string | object | any) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }

  function getStoredValue(key: string) {
    try {
      const item = localStorage.getItem(key);
      if (!item) throw new Error("No item found");
      return JSON.parse(item);
    } catch (error) {
      console.error(error);
    }
  }

  function clearStorage() {
    try {
      localStorage.clear();
    } catch (error) {
      console.error(error);
    }
  }
  return { storeValue, getStoredValue, clearStorage };
}
