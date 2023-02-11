import * as s from './ListItem.module.css';

export const ListItem = ({ text }) => {
  const remove = (event) => {
    event.target.closest('[data-item]')?.remove();
  };

  return (
    <li data-item class={s.item}>
      {text}
      <button type="button" class={s.btn} onclick={remove}>
        Remove
      </button>
    </li>
  );
};
