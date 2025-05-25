import { createRuleTester } from '../utils/eslint';

const error = (code: string, name: string) => ({
  code,
  errors: [{ messageId: 'legacyEventHandler', data: { name, expected: 'on:' + name.slice(2) } }],
});

createRuleTester('no-legacy-event-handler', {
  valid: [
    '<div on:click={fn} />;',
    '<input on:change={fn} />;',
    '<MyComponent onclick={fn} />;',
    '<web-component onclick={fn} />;',
    '<div somethingElse={fn} />;',
    '<math on:click={fn} />;',
    '<xml:foo onclick={fn} />;',
  ],
  invalid: [
    error('<div onclick={fn} />;', 'onclick'),
    error('<input onchange={fn} />;', 'onchange'),
    error('<button onmousedown={fn} />;', 'onmousedown'),
    error('<div onmouseover={fn} />;', 'onmouseover'),
    error('<section onkeyup={fn} />;', 'onkeyup'),
    error('<svg><g onclick={fn} /></svg>;', 'onclick'),
    error('<math onclick={fn} />;', 'onclick'),
  ],
});
