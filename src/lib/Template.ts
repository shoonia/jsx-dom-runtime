import { jsx } from '../jsxRuntime';

export const parseFromString = (html: string): DocumentFragment => {
  const template = jsx('template', {});

  template.innerHTML = html;

  return template.content;
};

export const Template = (props) => parseFromString(props.children);
