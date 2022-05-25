export const convertTemp = (temp: number) => {
  return Math.round(((temp - 273.15) * 9) / 5 + 32);
};
