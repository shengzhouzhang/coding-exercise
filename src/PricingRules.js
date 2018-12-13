import RULES from './config/rules.json';
import { getProductByType } from './products/Products';

export default class PricingRules {
  constructor(customerName) {
    const customer = RULES.find(({ customer }) => customer === customerName);
    this.rules = (customer && customer.rules) || [];
  }
  getProductRule = type => {
    return this.rules.find(rule => rule.product === type) || {};
  };
  getPrice = (type, count) => {
    const { product, ...rule } = this.getProductRule(type);
    return getProductByType(type).getPrice(count, { ...rule });
  };
}
