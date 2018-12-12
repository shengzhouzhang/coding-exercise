import ProductPrice from './ProductPrice';

describe('ProductPrice', () => {
  const PRICE = 100.11;

  describe('getPriceWithDefaultValue', () => {
    const TEST_CASES = [
      { count: 1, expected: 100.11 },
      { count: 2, expected: 200.22 },
      { count: 3, expected: 300.33 },
      { count: 4, expected: 400.44 },
      { count: 5, expected: 500.55 }
    ];

    TEST_CASES.forEach(({ count, expected }) => {
      it(`should return ${expected} when count is ${count}`, () => {
        const product = new ProductPrice(PRICE);
        const result = product.getPriceWithDefaultValue(count);
        expect(result).toBe(expected);
      });
    });
  });

  describe('buyNForM', () => {
    const TEST_CASES = [
      { count: 1, n: 3, m: 2, expected: 100.11 },
      { count: 2, n: 3, m: 2, expected: 200.22 },
      { count: 3, n: 3, m: 2, expected: 200.22 },
      { count: 4, n: 3, m: 2, expected: 300.33 },
      { count: 5, n: 3, m: 2, expected: 400.44 }
    ];

    TEST_CASES.forEach(({ count, n, m, expected }) => {
      it(`should return ${expected} when count is ${count}`, () => {
        const product = new ProductPrice(PRICE);
        const result = product.buyNForM(count, { n, m });
        expect(result).toBe(expected);
      });
    });
  });

  describe('getPriceWithSetValue', () => {
    const TEST_CASES = [
      { count: 1, price: 99.99, expected: 99.99 },
      { count: 2, price: 99.99, expected: 199.98 },
      { count: 3, price: 99.99, expected: 299.97 },
      { count: 4, price: 99.99, expected: 399.96 },
      { count: 5, price: 99.99, expected: 499.95 }
    ];

    TEST_CASES.forEach(({ count, price, expected }) => {
      it(`should return ${expected} when count is ${count}`, () => {
        const product = new ProductPrice(PRICE);
        const result = product.getPriceWithSetValue(count, { price });
        expect(result).toBe(expected);
      });
    });
  });

  describe('getPrice', () => {
    const TEST_CASES = [
      {
        count: 3,
        rule: { type: 'BUY_N_FOR_M', n: 3, m: 2 },
        expected: 200.22
      },
      {
        count: 3,
        rule: { type: 'FIXED_PRICE', price: 99.99 },
        expected: 299.97
      },
      {
        count: 3,
        rule: null,
        expected: 300.33
      }
    ];

    TEST_CASES.forEach(({ count, rule, expected }) => {
      const ruleType = rule ? rule.type : 'default';

      it(`should return ${expected} when rule type is ${ruleType}`, () => {
        const product = new ProductPrice(PRICE);
        const result = product.getPrice(count, rule);
        expect(result).toBe(expected);
      });
    });
  });
});
