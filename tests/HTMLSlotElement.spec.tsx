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
});
