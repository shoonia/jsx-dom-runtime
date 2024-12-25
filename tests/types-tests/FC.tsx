import type { FC, FunctionComponent } from 'jsx-dom-runtime';

export const App: JSX.FC = () => <p />;
export const App2: FC = () => <p />;
export const App3: FunctionComponent = () => <p />;

export const Foo: JSX.FC = ({ children }) => <p>{children}</p>;
export const Foo2: FC = ({ children }) => <p>{children}</p>;
export const Foo3: FunctionComponent = ({ children }) => <p>{children}</p>;

interface Props {
  text: string;
}

export const Bar: JSX.FC<Props> = ({ text }) => <p>{text}</p>;
export const Bar2: FC<Props> = ({ text }) => <p>{text}</p>;
export const Bar3: FunctionComponent<Props> = ({ text }) => <p>{text}</p>;
