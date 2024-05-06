import { useRef } from '..';
import { Driver } from './utils';

describe('e2e test', () => {
  it('should add new items to list by click', () => {
    const driver = new Driver();

    const List: JSX.FC = () => {
      const ref = useRef<HTMLUListElement>();

      const add: JSX.EventListener = () => {
        ref.current.append(
          <li data-testid="item">
            New Item
          </li>
        );
      };

      return (
        <>
          <button type="button" on:click={add} data-testid="button">
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
});
