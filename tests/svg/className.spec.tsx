describe('className / class', () => {
  it('should have a `class` attribute', () => {
    expect(
      <svg width="24" height="24" class="a">
        <path d="M12 12V6h-1v6H5v1h6v6h1v-6h6v-1z" class="b"/>
      </svg>
    ).toHaveOuterHTML(
      '<svg width="24" height="24" class="a"><path d="M12 12V6h-1v6H5v1h6v6h1v-6h6v-1z" class="b"></path></svg>'
    );
  });

  it('should update a `className` to `class`', () => {
    expect(
      <svg width="24" height="24" className="a">
        <path d="M12 12V6h-1v6H5v1h6v6h1v-6h6v-1z" className="b"/>
      </svg>
    ).toHaveOuterHTML(
      '<svg width="24" height="24" class="a"><path d="M12 12V6h-1v6H5v1h6v6h1v-6h6v-1z" class="b"></path></svg>'
    );
  });
});
