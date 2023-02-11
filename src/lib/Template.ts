import { jsx } from '../jsxRuntime';

export let parseFromString = (html: string): DocumentFragment => {
  return jsx('template', { innerHTML: html }).content;
};

export let Template = (props): DocumentFragment => {
  return parseFromString(props.children);
};
