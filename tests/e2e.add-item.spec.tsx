import { useRef } from '..';

import { Driver } from './e2e.Driver';

const driver = new Driver();

it('should add new items to list by click', () => {
  const List = () => {
    const ref = useRef<HTMLUListElement>();

    const add = () => {
      ref.current.append(
        <li data-testid="item">
          New Item
        </li>
      );
    };

    return (
      <>
        <button type="button" onclick={add} data-testid="button">
          add
        </button>
        <ul ref={ref}></ul>
      </>
    );
  };

  driver.render(<List />);

  driver.click('button');

  expect(driver.getAll('item')).toHaveLength(1);

  driver.click('button');

  expect(driver.getAll('item')).toHaveLength(2);
});
