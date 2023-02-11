import { createRef } from 'jsx-dom-runtime';

import * as s from './App.module.css';
import { ListItem } from './ListItem';

export const App = () => {
  const Input = createRef();
  const List = createRef();

  const addItem = () => {
    const input = Input.current;

    if (input.value === '') {
      return;
    }

    <List.current>
      <ListItem text={input.value} />
    </List.current>;

    input.value = '';
  };

  const pressEnter = (event) => {
    if (event.key === 'Enter') {
      addItem();
    }
  };

  return (
    <>
      <fieldset style="border: 0; padding: 0;">
        <div class={s.toolbar}>
          <input ref={Input} type="text" class={s.field} onkeypress={pressEnter} />
          <button type="button" class={s.btn} onclick={addItem}>
            Add Item
          </button>
        </div>
      </fieldset>
      <ul ref={List} class={s.list} />
    </>
  );
};
