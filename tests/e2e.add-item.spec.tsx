import { Driver } from './e2e.Driver';

const driver = new Driver();

it('should add new items to list by click', () => {
  const List = () => {
    const List = { current: null };

    const add = () => {
      <List.current>
        <li data-testid="item">item</li>
      </List.current>;
    };

    return (
      <>
        <button type="button" onClick={add} data-testid="button">
          add
        </button>
        <li ref={List}></li>
      </>
    );
  };

  driver.render(<List />);

  driver.click('button');

  expect(driver.getAll('item')).toHaveLength(1);

  driver.click('button');

  expect(driver.getAll('item')).toHaveLength(2);
});
