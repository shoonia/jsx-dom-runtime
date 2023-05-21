export const useText = (initContent?: string) => {
  const text = new Text(initContent);

  return [
    text,
    (content: string): void => {
      if (initContent !== content) {
        text.textContent = initContent = content;
      }
    },
  ] as const;
};
