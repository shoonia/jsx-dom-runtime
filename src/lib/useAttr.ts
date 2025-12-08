export const useAttr = (name: string, value?: string) => {
  const attr = document.createAttribute(name),
    setAttr = (newValue: string) => attr.value = newValue;

  if (value) {
    setAttr(value);
  }

  return [attr, setAttr] as const;
};
