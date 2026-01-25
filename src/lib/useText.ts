export const useText = (data?: string) => {
  const text = new Text(data);

  return [
    text,
    (content: string): void => {
      if (data !== content) {
        text.nodeValue = data = content;
      }
    },
  ] as const;
};
