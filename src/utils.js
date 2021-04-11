export const formatPriceBRL = (price) => {
  return `R$ ${(price / 100).toFixed(2)}`.replace(".", ",");
};
