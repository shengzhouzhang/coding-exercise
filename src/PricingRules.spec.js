import sinon from 'sinon';
import { premium } from './products/Products';
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

  it('should call getPrice with count and product rule', () => {
    const mock = sinon
      .mock(premium)
      .expects('getPrice')
      .withArgs(1, {
        type: 'FIXED_PRICE',
        price: '389.99'
      })
      .once();

    pricingRules.getPrice('premium', 1);
    mock.verify();
  });
});
