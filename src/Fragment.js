import { appendChildren } from './appendChildren';

export let Fragment = (props) => {
  let fragment = document.createDocumentFragment();

  appendChildren(fragment, props.children);
  return fragment;
};
