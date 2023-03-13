export default function useLocalStorage() {
  function storeValue(key: string, value: any) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }

  function getStoredValue(key: string, defaultValue: any = null) {
    try {
      const item = localStorage.getItem(key);
      if (!item) return defaultValue;
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
