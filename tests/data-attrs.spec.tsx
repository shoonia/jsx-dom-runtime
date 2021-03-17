describe('Data attribute', () => {
  it('should have the data attributes', () => {
    expect(<p data-test="text">text</p>).toHaveOuterHTML('<p data-test="text">text</p>');
  });

  it('should set attribute with boolean value', () => {
    expect(<b data-on />).toHaveOuterHTML('<b data-on="true"></b>');
    expect(<b data-on={true} />).toHaveOuterHTML('<b data-on="true"></b>');
    expect(<b data-on={false} />).toHaveOuterHTML('<b data-on="false"></b>');
    expect(<b data-on="true" />).toHaveOuterHTML('<b data-on="true"></b>');
    expect(<b data-on="false" />).toHaveOuterHTML('<b data-on="false"></b>');
  });

  it('shoud not set attribute with null or undefined', () => {
    expect(<span data-on={null} />).toHaveOuterHTML('<span></span>');
    expect(<span data-on={undefined} />).toHaveOuterHTML('<span></span>');
  });

  it('should stringify attribute value', () => {
    expect(<ol data-str={0} />).toHaveOuterHTML('<ol data-str="0"></ol>');
    expect(<ol data-str={1} />).toHaveOuterHTML('<ol data-str="1"></ol>');
    expect(<ol data-str={NaN} />).toHaveOuterHTML('<ol data-str="NaN"></ol>');
    expect(<ol data-str={Infinity} />).toHaveOuterHTML('<ol data-str="Infinity"></ol>');
    expect(<ol data-str={[]} />).toHaveOuterHTML('<ol data-str=""></ol>');
    expect(<ol data-str={[0, 1]} />).toHaveOuterHTML('<ol data-str="0,1"></ol>');
    expect(<ol data-str={() => {}} />).toHaveOuterHTML('<ol data-str="() => {}"></ol>');
    expect(<ol data-str={function x() {}} />).toHaveOuterHTML('<ol data-str="function x() {}"></ol>');
    expect(<ol data-str={{ x: 10 }} />).toHaveOuterHTML('<ol data-str="[object Object]"></ol>');
  });
});
