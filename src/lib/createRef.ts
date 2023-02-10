export let createRef = (current) => {
  return Object.seal({ current });
};
