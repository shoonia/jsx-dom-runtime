import { Template } from '../..';

describe('<Template/>', () => {
  it('should have SVG content', () => {
    expect(
      <div>
        <Template>
          {'<svg width="24" height="24" aria-hidden="true"><path d="M12 12V6h-1v6H5v1h6v6h1v-6h6v-1z"/></svg>'}
        </Template>
      </div>
    ).toHaveInnerHTML(
      '<svg width="24" height="24" aria-hidden="true"><path d="M12 12V6h-1v6H5v1h6v6h1v-6h6v-1z"></path></svg>',
    );
  });

  it('should have children SVG nodes', () => {
    const div = (
      <div>
        <Template>
          {'<svg width="24" height="24" aria-hidden="true"><path d="M12 12V6h-1v6H5v1h6v6h1v-6h6v-1z"/></svg>'}
        </Template>
      </div>
    );

    expect(div.firstChild).toBeInstanceOf(SVGSVGElement);
  });

  it('should have children HTML nodes', () => {
    const div = (
      <div>
        <Template>{'<p>Hello</p>'}</Template>
      </div>
    );

    expect(div.firstChild).toBeInstanceOf(HTMLParagraphElement);
  });
});
