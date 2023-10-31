function once(fn) {
  let hasBeenCalled = false;
  let result;

  function onceFn(...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      result = fn(...args);
      return result;
    } else {
      return undefined;
    }
  }

  return onceFn;
}