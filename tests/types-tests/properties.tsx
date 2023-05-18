import '../lib/properties.spec';

<audio muted />;
<audio volume={1} />;
<audio innerHTML="" />;
<audio textContent="" />;

// @ts-expect-error Property 'muted' does not exist on type 'HTMLAttributes<HTMLDivElement>'.
<div muted />;
// @ts-expect-error Property 'volume' does not exist on type 'HTMLAttributes<HTMLDivElement>'.
<div volume={1} />;
<div innerHTML="" />;
<div textContent="" />;
