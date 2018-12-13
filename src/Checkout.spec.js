import Checkout from './Checkout';
import PricingRules from './customers/PricingRules';

const TEST_CASES = [
  {
    customer: 'default',
    items: ['classic', 'standout', 'premium'],
    expected: 987.97
  },
  {
    customer: 'SECOND_BITE',
    items: ['classic', 'classic', 'classic', 'premium'],
    expected: 934.97
  },
  {
    customer: 'AXIL_COFFEE_ROASTERS',
    items: ['standout', 'standout', 'standout', 'premium'],
    expected: 1294.96
  }
];

describe.each(TEST_CASES)('Checkout', ({ customer, items, expected }) => {
  it(`should get total price for customer - ${customer}`, () => {
    const rules = new PricingRules(customer);
    const checkout = new Checkout(rules);
    items.forEach(item => checkout.add(item));
    const result = checkout.getTotalPrice();
    expect(result).toBe(expected);
  });
});
