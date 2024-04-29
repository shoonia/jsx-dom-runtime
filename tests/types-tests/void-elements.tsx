// A void element is an element whose content model never allows it to have contents under any circumstances.

<area />;
<area></area>;
// @ts-expect-error
<area>test</area>;
// @ts-expect-error
<area children="test" />;

<base />;
<base></base>;
// @ts-expect-error
<base>test</base>;
// @ts-expect-error
<base children="test" />;

<br />;
<br></br>;
// @ts-expect-error
<br>test</br>;
// @ts-expect-error
<br children="test" />;

<col />;
<col></col>;
// @ts-expect-error
<col>test</col>;
// @ts-expect-error
<col children="test" />;

<embed />;
<embed></embed>;
// @ts-expect-error
<embed>test</embed>;
// @ts-expect-error
<embed children="test" />;

<hr />;
<hr></hr>;
// @ts-expect-error
<hr>test</hr>;
// @ts-expect-error
<hr children="test" />;

<img />;
<img></img>;
// @ts-expect-error
<img>test</img>;
// @ts-expect-error
<img children="test" />;

<input />;
<input></input>;
// @ts-expect-error
<input>test</input>;
// @ts-expect-error
<input children="test" />;

<link />;
<link></link>;
// @ts-expect-error
<link>test</link>;
// @ts-expect-error
<link children="test" />;

<meta />;
<meta></meta>;
// @ts-expect-error
<meta>test</meta>;
// @ts-expect-error
<meta children="test" />;

<param />;
<param></param>;
// @ts-expect-error
<param>test</param>;
// @ts-expect-error
<param children="test" />;

<source />;
<source></source>;
// @ts-expect-error
<source>test</source>;
// @ts-expect-error
<source children="test" />;

<track />;
<track></track>;
// @ts-expect-error
<track>test</track>;
// @ts-expect-error
<track children="test" />;

<wbr />;
<wbr></wbr>;
// @ts-expect-error
<wbr>test</wbr>;
// @ts-expect-error
<wbr children="test" />;

// <keygen>;
