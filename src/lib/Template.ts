import { jsx } from '../jsxRuntime';

export let parseFromString = (html: string): DocumentFragment => {
  const template = jsx('template', {});

  template.innerHTML = html;

  return template.content;
};

export let Template = (props): DocumentFragment => {
  return parseFromString(props.children);
};
