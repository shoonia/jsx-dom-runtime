import { Driver } from './e2e.Driver';

const driver = new Driver();

it('should add new items to list by click', () => {
  const List = () => {
    const ref = { current: null };

    const add = () => {
      ref.current.appendChild(
        <li data-testid="item">item</li>
      );
    };

    return (
      <>
        <button type="button" onClick={add} data-testid="button">
          add
        </button>
        <li ref={ref}></li>
      </>
    );
  };

  driver.render(<List />);

  driver.click('button');

  expect(driver.getAll('item')).toHaveLength(1);

  driver.click('button');

  expect(driver.getAll('item')).toHaveLength(2);
});
