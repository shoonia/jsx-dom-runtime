describe('HTMLSlotElement', () => {
  it('should render <slot> element', () => {
    expect(
      <template>
        <details>
          <summary>
            <slot name="name">NAME</slot>
          </summary>
          <div>
            <slot name="attributes">None</slot>
          </div>
        </details>
      </template>
    ).toHaveOuterHTML(
      '<template><details><summary><slot name="name">NAME</slot></summary><div><slot name="attributes">None</slot></div></details></template>'
    );
  });

  it('should have `name` attribute', () => {
    expect(<slot name="hello" />).toHaveProperty('name', 'hello');
    expect(<slot name="hello" />).toHaveAttribute('name', 'hello');
  });
});
