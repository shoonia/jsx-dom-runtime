const createRef = () => Object.seal({ current: null });

export const App = () => {
  const Input = createRef();
  const List = createRef();

  const removeItem = ({ target }) => {
    target.closest('[data-item]').remove();
  };

  const addItem = () => {
    const field = Input.current;

    if (field.input === '') {
      return;
    }

    <List.current>
      <li data-item className="item">
        {field.value}
        <button type="button" className="btn" onClick={removeItem}>
          Remove
        </button>
      </li>
    </List.current>;

    field.value = '';
    field.focus();
  };

  const pressEnter = (event) => {
    if (event.key === 'Enter') {
      addItem();
    }
  };

  return (
    <>
      <fieldset style="border: 0; padding: 0;">
        <div className="toolbar">
          <input ref={Input} type="text" className="field" onKeyPress={pressEnter} />
          <button type="button" className="btn" onClick={addItem}>
          Add Item
          </button>
        </div>
      </fieldset>
      <ul className="list" ref={List} />
    </>
  );
};
