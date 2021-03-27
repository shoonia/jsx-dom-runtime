describe('<ruby />', () => {
  it('should render <ruby /> tag', () => {
    expect(
      <ruby>
        明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp>
      </ruby>
    ).toHaveOuterHTML(
      '<ruby>明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp></ruby>'
    );
  });
});
