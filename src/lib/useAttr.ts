export const useAttr = (name: string, value = '') => {
  const attr = document.createAttribute(name),
    setAttr = (val: string) => attr.value = val;

  setAttr(value);

  return [attr, setAttr] as const;
};
