import { t } from '../utils';

const _jsx = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

describe('draggable attribute', () => {
  it('should transform empty `draggable` value to "true"', async () => {
    const result = await t`<div draggable />`;
    expect(result).toBe(_jsx + '_jsx("div",{draggable:"true"});');
  });

  it('should transform `draggable` value `true` to "true"', async () => {
    const result = await t`<div draggable={true} />`;
    expect(result).toBe(_jsx + '_jsx("div",{draggable:"true"});');
  });

  it('should transform `draggable` value `false` to "false"', async () => {
    const result = await t`<div draggable={false} />`;
    expect(result).toBe(_jsx + '_jsx("div",{draggable:"false"});');
  });

  it('should correct compiled string "true"', async () => {
    const result = await t`<div draggable="true" />`;
    expect(result).toBe(_jsx + '_jsx("div",{draggable:"true"});');
  });

  it('should correct compiled string "false"', async () => {
    const result = await t`<div draggable="false" />`;
    expect(result).toBe(_jsx + '_jsx("div",{draggable:"false"});');
  });
});
