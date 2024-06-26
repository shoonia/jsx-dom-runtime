import { useRef } from 'jsx-dom-runtime';

import * as s from './ListItem.module.css';

interface Props {
  text: string;
}

export const ListItem: JSX.FC<Props> = ({ text }) => {
  const ref = useRef<HTMLLIElement>();

  const remove: JSX.EventListener = () => {
    ref.current.remove();
  };

  return (
    <li ref={ref} class={s.item}>
      {text}
      <button
        type="button"
        class={s.btn}
        on:click={remove}
        aria-label="remove"
      >
        <svg width="24" height="24" fill="#8e21b1" aria-hidden>
          <path d="M17 17a3 3 0 01-3 3H9a3 3 0 01-3-3V7H5V6h13v1h-1v10zM9 9h1v7H9V9zm2 0h1v7h-1V9zm2 0h1v7h-1V9zm-6 8a2 2 0 002 2h5a2 2 0 002-2V7H7v10zm6-11V5h-3v1H9V5a1 1 0 011-1h3a1 1 0 011 1v1h-1z" />
        </svg>
      </button>
    </li>
  );
};
