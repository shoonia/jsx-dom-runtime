import { createRef } from 'jsx-dom-runtime';

import * as s from './App.module.css';
import { ListItem } from './ListItem';

export const App = () => {
  const refInput = createRef();
  const refList = createRef();

  const addItem = () => {
    const input = refInput.current;

    if (input.value === '') {
      return;
    }

    <refList.current>
      <ListItem text={input.value} />
    </refList.current>;

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
          <input ref={refInput} type="text" class={s.field} onkeypress={pressEnter} />
          <button type="button" class={s.btn} onclick={addItem}>
            Add Item
          </button>
        </div>
      </fieldset>
      <ul ref={refList} class={s.list} />
    </>
  );
};
