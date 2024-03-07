// @ts-nocheck
describe('XML Namespaces', () => {
  it('should NOT break build process, and build correct string', () => {
    expect(
      <h:table>
        <h:tr>
          <h:td>Apples</h:td>
          <h:td>Bananas</h:td>
        </h:tr>
      </h:table>
    ).toHaveOuterHTML('<h:table><h:tr><h:td>Apples</h:td><h:td>Bananas</h:td></h:tr></h:table>');
  });

  it('should transform namespaced tag to string', async () => {
    await expect(`
    <namespaced:tag namespaced:attribute="value">
      content
    </namespaced:tag>`
    ).toBeTransform(
      'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/_jsx("namespaced:tag",{"namespaced:attribute":"value",children:"content"});',
    );
  });
});
