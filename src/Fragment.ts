import { appendChildren } from './appendChildren';

export let Fragment = (children) => {
  let fragment = new DocumentFragment();

  appendChildren(fragment, children);
  return fragment;
};
