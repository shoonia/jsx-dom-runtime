export function bindRef() {
  let refs = arguments;
  let i = refs.length;

  return (node: HTMLElement) => {
    while (0 < i--) {
      let ref = refs[i];

      if (typeof ref === 'function') {
        ref(node);
      } else {
        ref.current = node;
      }
    }
  };
}
