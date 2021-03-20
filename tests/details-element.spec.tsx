describe(HTMLDetailsElement, () => {
  it('should render details with summary', () => {
    expect(
      <details>
        <summary>Title</summary>
        Description
      </details>
    ).toHaveOuterHTML('<details><summary>Title</summary>Description</details>');
  });

  it('should have open attribute', () => {
    expect(<details open />).toHaveAttribute('open');
    expect(<details open />).toHaveProperty('open', true);

    expect(<details open={false} />).not.toHaveAttribute('open');
    expect(<details open={false} />).toHaveProperty('open', false);
  });
});
