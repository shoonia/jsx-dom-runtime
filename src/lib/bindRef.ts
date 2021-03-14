export function bindRef() {
  let refs = arguments;

  return (node: HTMLElement) => {
    for (let i = 0; i < refs.length;) {
      let ref = refs[i++];

      if (typeof ref === 'function') {
        ref(node);
      } else {
        ref.current = node;
      }
    }
  };
}
