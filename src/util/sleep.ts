/**
 * Returns a Promise which resolves after `duration` ms.
 */
export const sleep = (duration: number) =>
  new Promise(resolve => setTimeout(resolve, duration));
