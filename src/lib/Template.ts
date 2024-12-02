import { jsx } from '../jsx-runtime';

export const parseFromString = (html: string) =>
  /*#__PURE__*/ jsx('template', {
    ref(node) {
      node.innerHTML = html;
    }
  }).content;

export const Template = (props) =>
  /*#__PURE__*/ parseFromString(props.children);
