import { signal } from 'jsx-dom-runtime';

const className = signal('my-class');
className.set('new-class');
<div class={className} />;
<div prop:className={className} />;
<div attr:class={className} />;

const maxValue = signal(100);
maxValue.set(200);
<progress max={maxValue} />;
<progress prop:max={maxValue} />;

const id: JSX.Attributes['id'] = signal('my-id');
id.set('new-id');
<div id={id} />;
<div prop:id={id} />;
<div attr:id={id} />;

const role: JSX.Attributes['role'] = signal('button');
role.set('checkbox');
<div role={role} />;
<div prop:role={role} />;
<div attr:role={role} />;
