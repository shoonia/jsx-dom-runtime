export let useText = (initContent?: string) => {
  let text = new Text(initContent);

  return [
    text,
    (content: string): void => {
      text.textContent = content;
    },
  ] as const;
};
