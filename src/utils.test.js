import { formatPriceBRL } from "./utils";

describe("formatting price to BRL", () => {
  it("should return price in BRL format with 2 decimals even with 2 trailing zeros", () => {
    const result = formatPriceBRL(300);
    const expected = "R$ 3,00";
    expect(result).toEqual(expected);
  });
  it("should return price in BRL format with 2 decimals", () => {
    const result = formatPriceBRL(342);
    const expected = "R$ 3,42";
    expect(result).toEqual(expected);
  });
  it("should return price in BRL format with 2 decimals even with 1 trailing zero", () => {
    const result = formatPriceBRL(330);
    const expected = "R$ 3,30";
    expect(result).toEqual(expected);
  });
  it("should return price in BRL format with 2 decimals even if it's 0", () => {
    const result = formatPriceBRL(0);
    const expected = "R$ 0,00";
    expect(result).toEqual(expected);
  });
});
