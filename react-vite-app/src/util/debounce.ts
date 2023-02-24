interface DebounceArgs {
  func: Function;
  wait: number;
  option?: {
    leading?: boolean;
    trailing?: boolean;
  };
}

export function debounce({ func, wait, option }: DebounceArgs) {
  let timeout: number | undefined = undefined;
  let result: any;

  const later = (context: any, args: any) => {
    timeout = undefined;
    if (option && option.trailing) result = func.apply(context, args);
  };

  const debounced = function (this: any, ...args: any) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    if (option && option.leading && !timeout)
      result = func.apply(context, args);
    timeout = setTimeout(() => later(context, args), wait);
    return result;
  };

  debounced.cancel = () => {
    clearTimeout(timeout);
    timeout = undefined;
  };

  return debounced;
}

export function debounce2({ func, wait, option }: DebounceArgs) {
  let timer: number | undefined;
  return function (this: any, ...args: any[]) {
    let isInvoked = false;
    // If not cooling down and leading is true, invoke immediately.
    if (timer === undefined && option?.leading) {
      func.call(this, ...args);
      isInvoked = true;
    }
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      if (!isInvoked && option?.trailing) {
        func.call(this, ...args);
      }
      timer = undefined;
    }, wait);
  };
}
