const createRef = () => Object.seal({ current: null });

const App = () => {
  const Input = createRef();
  const List = createRef();

  const removeItem = ({ target }) => {
    target.closest('[data-item]').remove();
  };

  const addItem = () => {
    const field = Input.current;

    <List.current>
      <li data-item>
        <button type="button" onClick={removeItem}>
          Remove
        </button>
        {field.value}
      </li>
    </List.current>;

    field.value = null;
    field.focus();
  };

  const pressEnter = (event) => {
    if (event.key === 'Enter') {
      addItem();
    }
  };

  return (
    <>
      <fieldset style="border: none;">
        <input ref={Input} type="text" onKeyPress={pressEnter} />
        <button type="button" onClick={addItem}>
          Add Item
        </button>
      </fieldset>
      <ul ref={List} />
    </>
  );
};

const Body = document.body;

<Body>
  <App />
</Body>;
