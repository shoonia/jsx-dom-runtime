describe('HTMLTableCellElement', () => {
  describe('<td />', () => {
    it('should have `colSpan` attribute', () => {
      expect(<td colSpan={10} />).toHaveAttribute('colspan', '10');
      expect(<td colSpan={10} />).toHaveProperty('colSpan', 10);
    });

    it('should have `rowSpan` attribute', () => {
      expect(<td rowSpan={10} />).toHaveAttribute('rowspan', '10');
      expect(<td rowSpan={10} />).toHaveProperty('rowSpan', 10);
    });
  });

  describe('<td prop:*>', () => {
    it('should support prop:abbr', () => {
      expect(<td prop:abbr="abbr-val" />).toHaveProperty('abbr', 'abbr-val');
    });
    it('should support prop:align', () => {
      expect(<td prop:align="center" />).toHaveProperty('align', 'center');
    });
    it('should support prop:axis', () => {
      expect(<td prop:axis="axis-val" />).toHaveProperty('axis', 'axis-val');
    });
    it('should support prop:bgColor', () => {
      expect(<td prop:bgColor="#ff0" />).toHaveProperty('bgColor', '#ff0');
    });
    it('should support prop:ch', () => {
      expect(<td prop:ch="," />).toHaveProperty('ch', ',');
    });
    it('should support prop:chOff', () => {
      expect(<td prop:chOff="2" />).toHaveProperty('chOff', '2');
    });
    it('should support prop:colSpan', () => {
      expect(<td prop:colSpan={3} />).toHaveProperty('colSpan', 3);
    });
    it('should support prop:headers', () => {
      expect(<td prop:headers="header-id" />).toHaveProperty('headers', 'header-id');
    });
    it('should support prop:height', () => {
      expect(<td prop:height="100" />).toHaveProperty('height', '100');
    });
    it('should support prop:noWrap', () => {
      expect(<td prop:noWrap />).toHaveProperty('noWrap', true);
    });
    it('should support prop:rowSpan', () => {
      expect(<td prop:rowSpan={2} />).toHaveProperty('rowSpan', 2);
    });
    it('should support prop:scope', () => {
      expect(<td prop:scope="row" />).toHaveProperty('scope', 'row');
    });
    it('should support prop:vAlign', () => {
      expect(<td prop:vAlign="middle" />).toHaveProperty('vAlign', 'middle');
    });
    it('should support prop:width', () => {
      expect(<td prop:width="200" />).toHaveProperty('width', '200');
    });
  });
});
