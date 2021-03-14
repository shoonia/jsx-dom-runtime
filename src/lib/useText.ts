export let useText = (initContent?: string) => {
  let text = new Text(initContent);

  return <const>[
    text,
    (content: string): void => {
      text.textContent = content;
    },
  ];
};
