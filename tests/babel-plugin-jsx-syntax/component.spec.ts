import { t } from '../utils';

describe('component', () => {
  it('component', async () => {
    const result = await t`
    const Group = ({ open, title, children }) => (
      <details open={open}>
        <summary>
          {title}
        </summary>
        <fieldset>
          {children}
        </fieldset>
      </details>
    );

    export const RGBInputs = () => (
      <Group open title="RGB">
        <PairInputs param="r" />
        <PairInputs param="g" />
        <PairInputs param="b" />
      </Group>
    );`;

    expect(result).toBe(
      'import{jsx as _jsx}from"jsx-dom-runtime";const Group=({open,title,children})=>/*#__PURE__*/_jsx("details",{open:open,children:[/*#__PURE__*/_jsx("summary",{children:title}),/*#__PURE__*/_jsx("fieldset",{children:children})]});export const RGBInputs=()=>Group({open:true,title:"RGB",children:[PairInputs({param:"r"}),PairInputs({param:"g"}),PairInputs({param:"b"})]});'
    );
  });
});
