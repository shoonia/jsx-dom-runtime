import { createRef } from '..';

import { Driver } from './e2e.Driver';

const driver = new Driver();

it('should add new items to list by click', () => {
  const List = () => {
    const List = createRef();

    const add = () => {
      <List.current>
        <li data-testid="item">item</li>
      </List.current>;
    };

    return (
      <>
        <button type="button" onclick={add} data-testid="button">
          add
        </button>
        <ul ref={List}></ul>
      </>
    );
  };

  driver.render(<List />);

  driver.click('button');

  expect(driver.getAll('item')).toHaveLength(1);

  driver.click('button');

  expect(driver.getAll('item')).toHaveLength(2);
});
