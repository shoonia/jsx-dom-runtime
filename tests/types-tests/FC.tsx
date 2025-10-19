import { useText } from 'jsx-dom-runtime';

export const App: JSX.FC = () => <p />;
export const Foo: JSX.FC = ({ children }) => <p>{children}</p>;

interface Props {
  text: string;
}

export const Bar1: JSX.FC<Props> = ({ text }) => <p>{text}</p>;

export const Node1: JSX.FC = () => useText()[0];
export const Node2: JSX.FC = () => document.createTextNode('');
export const Node3: JSX.FC = () => document.createDocumentFragment();
export const Node4: JSX.FC = () => document.createComment('');
export const Node5: JSX.FC = () => document.createElement('qualifiedName');
export const Node6: JSX.FC = () => document.createElementNS('ns', 'qualifiedName');
export const Node7: JSX.FC = () => new Text();
export const Node8: JSX.FC = () => new DocumentFragment();
export const Node9: JSX.FC = () => new Image();

// @ts-expect-error
export const Error1: JSX.FC = () => document.createAttribute('name');
// @ts-expect-error
export const Error2: JSX.FC = () => document.createAttributeNS('ns', 'name');
// @ts-expect-error
export const Error3: JSX.FC = () => new Attr('name');
