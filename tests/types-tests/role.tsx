<div role="doc-abstract" />;
<div role="alert" />;
<div role="composite" />;
<div role="button" />;
<div role="heading" />;
<div role="banner" />;

/** Invalid ARIA roles */

// @ts-expect-error
<search role="alert" />;
// @ts-expect-error
<section role="composite" />;
// @ts-expect-error
<button role="button" />;
// @ts-expect-error
<h1 role="heading" />;
// @ts-expect-error
<header role="banner" />;
