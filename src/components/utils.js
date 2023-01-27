export const debounce = (func, delay) => {
    let timer;
    return (args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        return func(args);
      }, delay);
    };
  };