describe('ARIA attribute', () => {
  it('should have the aria attributes', () => {
    expect(<i aria-label="test" />).toHaveOuterHTML('<i aria-label="test"></i>');
  });

  it('should set attribute with boolean value', () => {
    expect(<b aria-hidden />).toHaveOuterHTML('<b aria-hidden="true"></b>');
    expect(<b aria-hidden={true} />).toHaveOuterHTML('<b aria-hidden="true"></b>');
    expect(<b aria-hidden={false} />).toHaveOuterHTML('<b aria-hidden="false"></b>');
    expect(<b aria-hidden="true" />).toHaveOuterHTML('<b aria-hidden="true"></b>');
    expect(<b aria-hidden="false" />).toHaveOuterHTML('<b aria-hidden="false"></b>');
  });

  it('shoud NOT set attribute with null or undefined', () => {
    // @ts-ignore
    expect(<span aria-disabled={null} />).toHaveOuterHTML('<span></span>');
    expect(<span aria-disabled={undefined} />).toHaveOuterHTML('<span></span>');
  });

  it('should set zero to attribute', () => {
    expect(<div aria-colindex={0} />).toHaveOuterHTML('<div aria-colindex="0"></div>');
  });

  it('should support `aria-activedescendant` attribute', () => {
    expect(<div aria-activedescendant="item1" />).toHaveAttribute('aria-activedescendant', 'item1');
  });

  it('should support `aria-atomic` attribute', () => {
    expect(<div aria-atomic="true" />).toHaveAttribute('aria-atomic', 'true');
  });

  it('should support `aria-autocomplete` attribute', () => {
    expect(<div aria-autocomplete="list" />).toHaveAttribute('aria-autocomplete', 'list');
  });

  it('should support `aria-busy` attribute', () => {
    expect(<div aria-busy="true" />).toHaveAttribute('aria-busy', 'true');
  });

  it('should support `aria-checked` attribute', () => {
    expect(<div aria-checked="mixed" />).toHaveAttribute('aria-checked', 'mixed');
  });

  it('should support `aria-controls` attribute', () => {
    expect(<div aria-controls="listbox1" />).toHaveAttribute('aria-controls', 'listbox1');
  });

  it('should support `aria-describedby` attribute', () => {
    expect(<div aria-describedby="desc1" />).toHaveAttribute('aria-describedby', 'desc1');
  });

  it('should support `aria-dropeffect` attribute', () => {
    expect(<div aria-dropeffect="move" />).toHaveAttribute('aria-dropeffect', 'move');
  });

  it('should support `aria-expanded` attribute', () => {
    expect(<div aria-expanded="false" />).toHaveAttribute('aria-expanded', 'false');
  });

  it('should support `aria-flowto` attribute', () => {
    expect(<div aria-flowto="next" />).toHaveAttribute('aria-flowto', 'next');
  });

  it('should support `aria-haspopup` attribute', () => {
    expect(<div aria-haspopup="menu" />).toHaveAttribute('aria-haspopup', 'menu');
  });

  it('should support `aria-invalid` attribute', () => {
    expect(<div aria-invalid="spelling" />).toHaveAttribute('aria-invalid', 'spelling');
  });

  it('should support `aria-label` attribute', () => {
    expect(<div aria-label="label" />).toHaveAttribute('aria-label', 'label');
  });

  it('should support `aria-labelledby` attribute', () => {
    expect(<div aria-labelledby="label1" />).toHaveAttribute('aria-labelledby', 'label1');
  });

  it('should support `aria-level` attribute', () => {
    expect(<div aria-level={3} />).toHaveAttribute('aria-level', '3');
  });

  it('should support `aria-live` attribute', () => {
    expect(<div aria-live="polite" />).toHaveAttribute('aria-live', 'polite');
  });

  it('should support `aria-multiline` attribute', () => {
    expect(<div aria-multiline="true" />).toHaveAttribute('aria-multiline', 'true');
  });

  it('should support `aria-multiselectable` attribute', () => {
    expect(<div aria-multiselectable="false" />).toHaveAttribute('aria-multiselectable', 'false');
  });

  it('should support `aria-orientation` attribute', () => {
    expect(<div aria-orientation="vertical" />).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('should support `aria-owns` attribute', () => {
    expect(<div aria-owns="item2" />).toHaveAttribute('aria-owns', 'item2');
  });

  it('should support `aria-placeholder` attribute', () => {
    expect(<div aria-placeholder="Enter text" />).toHaveAttribute('aria-placeholder', 'Enter text');
  });

  it('should support `aria-posinset` attribute', () => {
    expect(<div aria-posinset={2} />).toHaveAttribute('aria-posinset', '2');
  });

  it('should support `aria-pressed` attribute', () => {
    expect(<div aria-pressed="true" />).toHaveAttribute('aria-pressed', 'true');
  });

  it('should support `aria-readonly` attribute', () => {
    expect(<div aria-readonly="true" />).toHaveAttribute('aria-readonly', 'true');
  });

  it('should support `aria-relevant` attribute', () => {
    expect(<div aria-relevant="additions" />).toHaveAttribute('aria-relevant', 'additions');
  });

  it('should support `aria-required` attribute', () => {
    expect(<div aria-required="true" />).toHaveAttribute('aria-required', 'true');
  });

  it('should support `aria-roledescription` attribute', () => {
    expect(<div aria-roledescription="slider" />).toHaveAttribute('aria-roledescription', 'slider');
  });

  it('should support `aria-rowcount` attribute', () => {
    expect(<div aria-rowcount={5} />).toHaveAttribute('aria-rowcount', '5');
  });

  it('should support `aria-rowindex` attribute', () => {
    expect(<div aria-rowindex={2} />).toHaveAttribute('aria-rowindex', '2');
  });

  it('should support `aria-rowspan` attribute', () => {
    expect(<div aria-rowspan={3} />).toHaveAttribute('aria-rowspan', '3');
  });

  it('should support `aria-selected` attribute', () => {
    expect(<div aria-selected="true" />).toHaveAttribute('aria-selected', 'true');
  });

  it('should support `aria-setsize` attribute', () => {
    expect(<div aria-setsize={10} />).toHaveAttribute('aria-setsize', '10');
  });

  it('should support `aria-sort` attribute', () => {
    expect(<div aria-sort="ascending" />).toHaveAttribute('aria-sort', 'ascending');
  });

  it('should support `aria-valuemax` attribute', () => {
    expect(<div aria-valuemax={100} />).toHaveAttribute('aria-valuemax', '100');
  });

  it('should support `aria-valuemin` attribute', () => {
    expect(<div aria-valuemin={0} />).toHaveAttribute('aria-valuemin', '0');
  });

  it('should support `aria-valuenow` attribute', () => {
    expect(<div aria-valuenow={50} />).toHaveAttribute('aria-valuenow', '50');
  });

  it('should support `aria-valuetext` attribute', () => {
    expect(<div aria-valuetext="50%" />).toHaveAttribute('aria-valuetext', '50%');
  });

  it('should support `role` attribute', () => {
    expect(<div role="button" />).toHaveAttribute('role', 'button');
  });
});

describe('prop:* aria properties', () => {
  it('should set prop:ariaAtomic correctly', () => {
    expect(<div prop:ariaAtomic="true" />).toHaveProperty('ariaAtomic', 'true');
  });

  it('should set prop:ariaLabel correctly', () => {
    expect(<div prop:ariaLabel="Test Label" />).toHaveProperty('ariaLabel', 'Test Label');
  });

  it('should set prop:ariaHidden correctly', () => {
    expect(<div prop:ariaHidden={true} />).toHaveProperty('ariaHidden', true);
  });

  it('should set prop:ariaChecked correctly', () => {
    expect(<div prop:ariaChecked="mixed" />).toHaveProperty('ariaChecked', 'mixed');
  });

  it('should set prop:ariaExpanded correctly', () => {
    expect(<div prop:ariaExpanded={false} />).toHaveProperty('ariaExpanded', false);
  });

  it('should set prop:ariaDescribedby correctly', () => {
    expect(<div prop:ariaDescribedby="description-id" />).toHaveProperty('ariaDescribedby', 'description-id');
  });

  it('should set prop:ariaControls correctly', () => {
    expect(<div prop:ariaControls="control-id" />).toHaveProperty('ariaControls', 'control-id');
  });

  it('should set prop:ariaLive correctly', () => {
    expect(<div prop:ariaLive="polite" />).toHaveProperty('ariaLive', 'polite');
  });

  it('should set prop:ariaOrientation correctly', () => {
    expect(<div prop:ariaOrientation="horizontal" />).toHaveProperty('ariaOrientation', 'horizontal');
  });

  it('should set prop:ariaValuenow correctly', () => {
    expect(<div prop:ariaValuenow={50} />).toHaveProperty('ariaValuenow', 50);
  });

  it('should set prop:ariaBraillelabel correctly', () => {
    expect(<div prop:ariaBraillelabel="Braille Label" />).toHaveProperty('ariaBraillelabel', 'Braille Label');
  });

  it('should set prop:ariaBrailleroledescription correctly', () => {
    expect(<div prop:ariaBrailleroledescription="Braille Role" />).toHaveProperty('ariaBrailleroledescription', 'Braille Role');
  });

  it('should set prop:ariaBusy correctly', () => {
    expect(<div prop:ariaBusy={true} />).toHaveProperty('ariaBusy', true);
  });

  it('should set prop:ariaChecked correctly', () => {
    expect(<div prop:ariaChecked="mixed" />).toHaveProperty('ariaChecked', 'mixed');
  });

  it('should set prop:ariaColcount correctly', () => {
    expect(<div prop:ariaColcount={5} />).toHaveProperty('ariaColcount', 5);
  });

  it('should set prop:ariaColindex correctly', () => {
    expect(<div prop:ariaColindex={3} />).toHaveProperty('ariaColindex', 3);
  });

  it('should set prop:ariaColindextext correctly', () => {
    expect(<div prop:ariaColindextext="Column 3" />).toHaveProperty('ariaColindextext', 'Column 3');
  });

  it('should set prop:ariaColspan correctly', () => {
    expect(<div prop:ariaColspan={2} />).toHaveProperty('ariaColspan', 2);
  });

  it('should set prop:ariaControls correctly', () => {
    expect(<div prop:ariaControls="control-id" />).toHaveProperty('ariaControls', 'control-id');
  });

  it('should set prop:ariaCurrent correctly', () => {
    expect(<div prop:ariaCurrent="page" />).toHaveProperty('ariaCurrent', 'page');
  });

  it('should set prop:ariaDescribedby correctly', () => {
    expect(<div prop:ariaDescribedby="description-id" />).toHaveProperty('ariaDescribedby', 'description-id');
  });

  it('should set prop:ariaDescription correctly', () => {
    expect(<div prop:ariaDescription="Description text" />).toHaveProperty('ariaDescription', 'Description text');
  });

  it('should set prop:ariaDetails correctly', () => {
    expect(<div prop:ariaDetails="details-id" />).toHaveProperty('ariaDetails', 'details-id');
  });

  it('should set prop:ariaDisabled correctly', () => {
    expect(<div prop:ariaDisabled={true} />).toHaveProperty('ariaDisabled', true);
  });

  it('should set prop:ariaDropeffect correctly', () => {
    expect(<div prop:ariaDropeffect="move" />).toHaveProperty('ariaDropeffect', 'move');
  });

  it('should set prop:ariaErrormessage correctly', () => {
    expect(<div prop:ariaErrormessage="error-id" />).toHaveProperty('ariaErrormessage', 'error-id');
  });

  it('should set prop:ariaExpanded correctly', () => {
    expect(<div prop:ariaExpanded={false} />).toHaveProperty('ariaExpanded', false);
  });

  it('should set prop:ariaFlowto correctly', () => {
    expect(<div prop:ariaFlowto="next-id" />).toHaveProperty('ariaFlowto', 'next-id');
  });

  it('should set prop:ariaGrabbed correctly', () => {
    expect(<div prop:ariaGrabbed={true} />).toHaveProperty('ariaGrabbed', true);
  });

  it('should set prop:ariaHaspopup correctly', () => {
    expect(<div prop:ariaHaspopup="menu" />).toHaveProperty('ariaHaspopup', 'menu');
  });

  it('should set prop:ariaHidden correctly', () => {
    expect(<div prop:ariaHidden={true} />).toHaveProperty('ariaHidden', true);
  });

  it('should set prop:ariaInvalid correctly', () => {
    expect(<div prop:ariaInvalid="spelling" />).toHaveProperty('ariaInvalid', 'spelling');
  });

  it('should set prop:ariaKeyshortcuts correctly', () => {
    expect(<div prop:ariaKeyshortcuts="Ctrl+S" />).toHaveProperty('ariaKeyshortcuts', 'Ctrl+S');
  });

  it('should set prop:ariaLabel correctly', () => {
    expect(<div prop:ariaLabel="Label text" />).toHaveProperty('ariaLabel', 'Label text');
  });

  it('should set prop:ariaLabelledby correctly', () => {
    expect(<div prop:ariaLabelledby="label-id" />).toHaveProperty('ariaLabelledby', 'label-id');
  });

  it('should set prop:ariaLevel correctly', () => {
    expect(<div prop:ariaLevel={3} />).toHaveProperty('ariaLevel', 3);
  });

  it('should set prop:ariaLive correctly', () => {
    expect(<div prop:ariaLive="polite" />).toHaveProperty('ariaLive', 'polite');
  });

  it('should set prop:ariaModal correctly', () => {
    expect(<div prop:ariaModal={true} />).toHaveProperty('ariaModal', true);
  });

  it('should set prop:ariaMultiline correctly', () => {
    expect(<div prop:ariaMultiline={false} />).toHaveProperty('ariaMultiline', false);
  });

  it('should set prop:ariaMultiselectable correctly', () => {
    expect(<div prop:ariaMultiselectable={true} />).toHaveProperty('ariaMultiselectable', true);
  });

  it('should set prop:ariaOrientation correctly', () => {
    expect(<div prop:ariaOrientation="vertical" />).toHaveProperty('ariaOrientation', 'vertical');
  });

  it('should set prop:ariaOwns correctly', () => {
    expect(<div prop:ariaOwns="owned-id" />).toHaveProperty('ariaOwns', 'owned-id');
  });

  it('should set prop:ariaPlaceholder correctly', () => {
    expect(<div prop:ariaPlaceholder="Enter text" />).toHaveProperty('ariaPlaceholder', 'Enter text');
  });

  it('should set prop:ariaPosinset correctly', () => {
    expect(<div prop:ariaPosinset={2} />).toHaveProperty('ariaPosinset', 2);
  });

  it('should set prop:ariaPressed correctly', () => {
    expect(<div prop:ariaPressed="true" />).toHaveProperty('ariaPressed', 'true');
  });

  it('should set prop:ariaReadonly correctly', () => {
    expect(<div prop:ariaReadonly={true} />).toHaveProperty('ariaReadonly', true);
  });

  it('should set `role` property correctly', () => {
    expect(<div prop:role="code" />).toHaveProperty('role', 'code');
  });
});
