import { Driver } from '../e2e.Driver';
import { events } from '../..';

describe('events', () => {
  const driver = new Driver();

  it('should add event listener', () => {
    const listener = jest.fn();

    const ready = events((on) => {
      on('click', listener);
    });

    driver.render(<button ref={ready} data-testid="btn" />);
    driver.click('btn');
    driver.click('btn');

    expect(listener).toHaveBeenCalledTimes(2);
  });

  it('should remove event listener', () => {
    const spy = jest.fn();

    const ready = events((on, off) => {
      const cb = () => {
        off('click', cb);
        spy();
      };

      on('click', cb);
    });

    driver.render(<button ref={ready} data-testid="btn" />);
    driver.click('btn');
    driver.click('btn');

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add event listener with options', () => {
    const listener = jest.fn();

    const ready = events((on) => {
      on('click', listener, { once: true }); // << once
    });

    driver.render(<button ref={ready} data-testid="btn" />);
    driver.click('btn');
    driver.click('btn'); // << should ignore

    expect(listener).toHaveBeenCalledTimes(1);
  });

  it('should update textContent on target element', () => {
    const ready = events((on, off, Target) => {
      on('click', () => {
        <Target textContent="new content" />;
      });
    });

    driver.render(<button ref={ready} data-testid="btn" />);
    expect(driver.get('btn')).toHaveInnerHTML('');

    driver.click('btn');
    expect(driver.get('btn')).toHaveInnerHTML('new content');
  });
});
