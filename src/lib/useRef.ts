export let useRef = (current) => {
  return Object.seal({ current });
};
