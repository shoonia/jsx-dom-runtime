import { useRef } from 'jsx-dom-runtime';

describe('popoverTargetElement', () => {
  it('should set popoverTargetElement element with directive prop:* via button', () => {
    const div = useRef<HTMLDivElement>();

    document.body.append(
      <>
        <div ref={div}>
          This is popover content!
        </div>
        <button
          type="button"
          id="btn"
          prop:popoverTargetElement={div.current}
        >
          Toggle popover
        </button>
      </>
    );

    expect(div.current).toBeInstanceOf(HTMLDivElement);
    expect(document.getElementById('btn')).toHaveProperty('popoverTargetElement', div.current);
  });

  it('should set popoverTargetElement element with directive prop:* via input[type=button]', () => {
    const div = useRef<HTMLDivElement>();

    document.body.append(
      <>
        <div ref={div}>
          This is popover content!
        </div>
        <input
          type="button"
          id="inp"
          prop:popoverTargetElement={div.current}
          value="Toggle popover"
        />
      </>
    );

    expect(div.current).toBeInstanceOf(HTMLDivElement);
    expect(document.getElementById('inp')).toHaveProperty('popoverTargetElement', div.current);
  });
});
