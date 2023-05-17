import { appendChildren } from './appendChildren';

export const Fragment = (children) => {
  const fragment = new DocumentFragment();

  appendChildren(fragment, children);
  return fragment;
};
