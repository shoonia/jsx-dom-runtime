// @ts-nocheck
import { t } from '../utils';

describe('XML Namespaces', () => {
  it('should NOT break build process, and build correct string', () => {
    expect(
      <div>
        <h:table>
          <h:tr>
            <h:td>Apples</h:td>
            <h:td>Bananas</h:td>
          </h:tr>
        </h:table>
      </div>
    ).toHaveInnerHTML('<h:table><h:tr><h:td>Apples</h:td><h:td>Bananas</h:td></h:tr></h:table>');
  });

  it('should transform namespaced tag to string', async () => {
    const result = await t`
    <namespaced:tag namespaced:attribute="value">
      content
    </namespaced:tag>`;

    expect(result).toBe(
      'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/_jsx("namespaced:tag",{"namespaced:attribute":"value",children:"content"});',
    );
  });
});
