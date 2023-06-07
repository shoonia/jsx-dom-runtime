import { t } from '../utils';

describe('MathML: <annotation-xml />', () => {
  it('should render', () => {
    expect(<annotation-xml id="id" />).toHaveOuterHTML('<annotation-xml id="id"></annotation-xml>');
  });

  it('should transform', async () => {
    const result = await t`<annotation-xml id="id" />`;

    expect(result).toBe(
      'import{mathmlNS as _mathmlNS,jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/_jsx("annotation-xml",{id:"id",ns:_mathmlNS});'
    );
  });
});
