describe('HTMLPictureElement', () => {
  it('should render a picture', () => {
    expect(
      <picture>
        <source srcset="/a.jpg" media="(min-width: 800px)" />
        <img src="/b.jpg" alt="" />
      </picture>
    ).toHaveOuterHTML(
      '<picture><source srcset="/a.jpg" media="(min-width: 800px)"><img src="/b.jpg" alt=""></picture>'
    );
  });
});
