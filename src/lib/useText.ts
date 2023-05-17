export const useText = (initContent?: string) => {
  const text = new Text(initContent);

  return [
    text,
    (content: string): void => {
      text.textContent = content;
    },
  ] as const;
};
