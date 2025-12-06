describe('dataset property', () => {
  it('should set dataset attributes', () => {
    const div = <div dataset={{ test: 'value', id: '123' }} /> as HTMLDivElement;

    expect(div).toHaveAttribute('data-test', 'value');
    expect(div).toHaveAttribute('data-id', '123');
    expect(div.dataset.test).toBe('value');
    expect(div.dataset.id).toBe('123');
    expect(div).toHaveOuterHTML('<div data-test="value" data-id="123"></div>');
  });

  it('should set dataset attributes with various types', () => {
    const div = <div dataset={{ num: 42, flag: true, nullish: null, undef: undefined, obj: { a: 1 } } as any} /> as HTMLDivElement;

    expect(div).toHaveAttribute('data-num', '42');
    expect(div).toHaveAttribute('data-flag', 'true');
    expect(div).toHaveAttribute('data-obj', '[object Object]');
    expect(div.dataset.num).toBe('42');
    expect(div.dataset.flag).toBe('true');
    expect(div.dataset.nullish).toBeUndefined();
    expect(div.dataset.undef).toBeUndefined();
    expect(div.dataset.obj).toBe('[object Object]');
    expect(div).toHaveOuterHTML('<div data-num="42" data-flag="true" data-obj="[object Object]"></div>');
  });
});
