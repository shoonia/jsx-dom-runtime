import { t } from './transform';

describe('x', () => {
  it('x', async () => {
    const result = await t(`
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
    );`);

    expect(result).toBe(`const Group=({open,title,children})=><details open={open}>
        <summary>
          {title}
        </summary>
        <fieldset>
          {children}
        </fieldset>
      </details>;export const RGBInputs=()=>Group({open:true,title:"RGB",children:[PairInputs({param:"r"}),PairInputs({param:"g"}),PairInputs({param:"b"})]});`);
  });
});
