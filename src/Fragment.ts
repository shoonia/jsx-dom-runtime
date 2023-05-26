import { appendChildren } from './appendChildren';

export const Fragment = (children) => {
  const fragment = new DocumentFragment();

  appendChildren(children, fragment);
  return fragment;
};
