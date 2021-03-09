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
    expect(<oi data-str={0} />).toHaveOuterHTML('<oi data-str="0"></oi>');
    expect(<oi data-str={1} />).toHaveOuterHTML('<oi data-str="1"></oi>');
    expect(<oi data-str={NaN} />).toHaveOuterHTML('<oi data-str="NaN"></oi>');
    expect(<oi data-str={Infinity} />).toHaveOuterHTML('<oi data-str="Infinity"></oi>');
    expect(<oi data-str={[0, 1]} />).toHaveOuterHTML('<oi data-str="0,1"></oi>');
    expect(<oi data-str={() => {}} />).toHaveOuterHTML('<oi data-str="() => {}"></oi>');
    expect(<oi data-str={function x() {}} />).toHaveOuterHTML('<oi data-str="function x() {}"></oi>');
    expect(<oi data-str={{ x: 10 }} />).toHaveOuterHTML('<oi data-str="[object Object]"></oi>');
  });
});
