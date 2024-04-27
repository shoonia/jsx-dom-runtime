import { useRef } from 'jsx-dom-runtime';

import * as s from './App.module.css';
import { ListItem } from './ListItem';

export const App: JSX.FC = () => {
  const inputRef = useRef<HTMLInputElement>();
  const ulRef = useRef<HTMLUListElement>();

  const addItem = () => {
    const input = inputRef.current;

    if (input.value !== '') {
      ulRef.current.prepend(
        <ListItem text={input.value} />,
      );

      input.value = '';
    }
  };

  const pressEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      addItem();
    }
  };

  return (
    <div class={s.wrapper}>
      <fieldset class={s.box}>
        <div class={s.toolbar}>
          <input
            ref={inputRef}
            type="text"
            class={s.field}
            on:keyUp={pressEnter}
            autofocus
            maxLength={255}
            placeholder="typing something"
          />
          <button type="button" class={s.btn} on:click={addItem}>
            Add Item
          </button>
        </div>
      </fieldset>
      <ul ref={ulRef} class={s.list}>
        <ListItem text="Hello and welcome" />
      </ul>
    </div>
  );
};
