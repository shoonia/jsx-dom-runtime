// @ts-nocheck
const i = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

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
    )
      .toBeTransform(i +'_jsx("namespaced:tag",{"namespaced:attribute":"value",children:"content"});');
  });

  it('should transform empty attributes to `true`', async () => {
    await expect('<my:element isReady is-ready is:ready />')
      .toBeTransform(i + '_jsx("my:element",{isReady:true,"is-ready":true,"is:ready":true});');
  });
});
