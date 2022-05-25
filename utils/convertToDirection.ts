const sectors = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"] as const;

export const convertToDirection = (deg: number) => {
  return sectors[Math.floor(deg / 45)];
};
