import { extensions } from '../../jsx-runtime';
import { dataset } from '../../extensions/dataset';

describe('_extensions/dataset', () => {
  beforeAll(() => {
    dataset();
  });

  afterAll(() => {
    extensions.clear();
  });

  it('should apply dataset extension', () => {
    expect(<div dataset={{
      test: 'qa',
      hello: true,
      falsy: false,
      world: 1,
      zero: 0,
      no: undefined,
      empty: null,
      str: '',
    }} />).toHaveOuterHTML(
      '<div data-test="qa" data-hello="true" data-falsy="false" data-world="1" data-zero="0" data-str=""></div>'
    );
  });
});
