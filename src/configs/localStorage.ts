export const isClient = typeof window !== "undefined";

export const localStorage = {
  getItem(key: string) {
    if (!isClient) return undefined;
    return window.localStorage.getItem(key) as string;
  },
  setItem(key: string, value: string) {
    if (isClient) {
      window.localStorage.setItem(key, value);
    }
  },
  removeItem(key: string) {
    if (isClient) {
      window.localStorage.removeItem(key);
    }
  },
};
