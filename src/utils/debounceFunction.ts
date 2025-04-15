export const debounceFunction = <F extends (...args: any) => any>(
  func: F,
  waitFor: number
) => {
  let timeout: NodeJS.Timeout | null = null;

  const debounced = (...args: any) => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func(...args);
      timeout = null;
    }, waitFor);
  };

  return debounced as (...args: Parameters<F>) => ReturnType<F>;
};
