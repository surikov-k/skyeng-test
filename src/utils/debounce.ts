export function debounce<F extends (...args: Parameters<F>) => void>(cb: F, delay = 500) {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: Parameters<F>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
