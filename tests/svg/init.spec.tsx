describe('<svg/> support', () => {
  it('should render SVG', () => {
    <document.body>
      <svg width="99%" height="99%" viewBox="0 0 250 150">
        <rect width="100%" height="100%" fill="url(#fill)" clip-path="url(#clip-path)"/>
        <linearGradient id="fill">
          <stop offset=".6" stop-color="rgba(255,255,255,.5)">
            <animate attributeName="offset" dur="2s" keyTimes="0;0.25;1" repeatCount="indefinite" values="-2;-2;1"/>
          </stop>
          <stop offset="1.5" stop-color="#dfe5eb">
            <animate attributeName="offset" dur="1s" keyTimes="0;0.25;1" repeatCount="indefinite" values="-1;-1;2"/>
          </stop>
          <stop offset="2.6" stop-color="#dfe5eb">
            <animate attributeName="offset" dur="1s" keyTimes="0;0.25;1" repeatCount="indefinite" values="0;0;3"/>
          </stop>
        </linearGradient>
        <clipPath id="clip-path">
          <rect width="200" height="50" x="28" y="55" rx="0" ry="0"/>
        </clipPath>
      </svg>
    </document.body>;

    expect(document.body.firstElementChild.namespaceURI).toBe('http://www.w3.org/2000/svg');
    expect(document.body).toHaveInnerHTML(
      '<svg width="99%" height="99%" viewBox="0 0 250 150"><rect width="100%" height="100%" fill="url(#fill)" clip-path="url(#clip-path)"></rect><linearGradient id="fill"><stop offset=".6" stop-color="rgba(255,255,255,.5)"><animate attributeName="offset" dur="2s" keyTimes="0;0.25;1" repeatCount="indefinite" values="-2;-2;1"></animate></stop><stop offset="1.5" stop-color="#dfe5eb"><animate attributeName="offset" dur="1s" keyTimes="0;0.25;1" repeatCount="indefinite" values="-1;-1;2"></animate></stop><stop offset="2.6" stop-color="#dfe5eb"><animate attributeName="offset" dur="1s" keyTimes="0;0.25;1" repeatCount="indefinite" values="0;0;3"></animate></stop></linearGradient><clipPath id="clip-path"><rect width="200" height="50" x="28" y="55" rx="0" ry="0"></rect></clipPath></svg>'
    );
  });
});
