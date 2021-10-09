import { appendChildren } from './appendChildren';

export let Fragment = (props) => {
  let fragment = new DocumentFragment();

  appendChildren(fragment, props.children);
  return fragment;
};
