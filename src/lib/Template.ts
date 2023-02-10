import { jsx } from '../jsxRuntime';

export let Template = (props): DocumentFragment => {
  return jsx('template', { innerHTML: props.children }).content;
};
