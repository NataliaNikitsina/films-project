export const trimToMaxLength = (value: string, maxLength: number = 100) => {
  return value.length > maxLength ? value.slice(0, maxLength - 3) + '...' : value;
};
