// converts a string to a proper string - makes first letter a capital
export const toProper = (string) => {
  return string[0].toUpperCase() + string.substring(1);
};
