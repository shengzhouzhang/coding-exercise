import PricingRules from './PricingRules';

describe('PricingRules', () => {
  const pricingRules = new PricingRules('MYER');

  it('should load pricing rules', () => {
    expect(pricingRules.rules).toEqual([
      {
        type: 'BUY_N_FOR_M',
        product: 'standout',
        n: 5,
        m: 4
      },
      {
        type: 'FIXED_PRICE',
        product: 'premium',
        price: '389.99'
      }
    ]);
  });

  it('should get pricing rule for a product', () => {
    const result = pricingRules.getProductRule('premium');
    const expected = {
      type: 'FIXED_PRICE',
      product: 'premium',
      price: '389.99'
    };
    expect(result).toEqual(expected);
  });
});
