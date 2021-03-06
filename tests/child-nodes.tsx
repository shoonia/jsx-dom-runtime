describe('Child nodes', () => {
  it('should work with deep nested child nodes', () => {
    expect(
      <div>
        { ['one ', ['two ', ['three']]] }
      </div>
    ).toHaveOuterHTML('<div>one two three</div>');
  });
});
