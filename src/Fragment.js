import { doc } from './util';
import { appendChildren } from './appendChildren';

export let Fragment = (props) => {
  let fragment = doc.createDocumentFragment();

  appendChildren(fragment, props.children);
  return fragment;
};
