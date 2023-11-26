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
});
