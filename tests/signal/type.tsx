import { signal } from 'jsx-dom-runtime';

const className = signal('my-class');
className.set('new-class');
<div class={className} />;

const maxValue = signal(100);
maxValue.set(200);
<progress max={maxValue} />;
