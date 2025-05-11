describe('component', () => {
  it('component', async () => {
    await expect(`
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
    );`
    ).toBeTransform(
      'import{jsx as _jsx}from"jsx-dom-runtime";const Group=({open,title,children})=>/*#__PURE__*/_jsx("details",{open:open},[/*#__PURE__*/_jsx("summary",{},title),/*#__PURE__*/_jsx("fieldset",{},children)]);export const RGBInputs=()=>Group({open:true,title:"RGB",children:[PairInputs({param:"r"}),PairInputs({param:"g"}),PairInputs({param:"b"})]});'
    );
  });
});
