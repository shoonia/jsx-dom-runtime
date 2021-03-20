describe('Child nodes', () => {
  it('should work with deep nested child nodes', () => {
    expect(
      <div>
        { ['one ', ['two ', ['three']]] }
      </div>
    ).toHaveOuterHTML('<div>one two three</div>');
  });

  it('should have a space', () => {
    expect(<div> </div>).toHaveOuterHTML('<div> </div>');
    expect(<div>{' '}</div>).toHaveOuterHTML('<div> </div>');
    expect(<div>{[' ']}</div>).toHaveOuterHTML('<div> </div>');
  });

  it('should not have any child nodes', () => {
    expect(<article />).toHaveOuterHTML('<article></article>');
    expect(<article></article>).toHaveOuterHTML('<article></article>');
  });
});
