export const treatPriceInfo = (price: number): string => {
  return `R$${price.toFixed(2)}`;
};
