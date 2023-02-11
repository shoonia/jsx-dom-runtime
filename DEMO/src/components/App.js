import { createRef } from 'jsx-dom-runtime';

import * as s from './App.module.css';
import { ListItem } from './ListItem';

export const App = () => {
  const RefInput = createRef();
  const RefList = createRef();

  const addItem = () => {
    const input = RefInput.current;

    if (input.value === '') {
      return;
    }

    <RefList.current>
      <ListItem text={input.value} />
    </RefList.current>;

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
          <input ref={RefInput} type="text" class={s.field} onkeypress={pressEnter} />
          <button type="button" class={s.btn} onclick={addItem}>
            Add Item
          </button>
        </div>
      </fieldset>
      <ul ref={RefList} class={s.list} />
    </>
  );
};
