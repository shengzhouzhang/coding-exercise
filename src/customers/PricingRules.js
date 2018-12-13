import RULES from '../config/rules.json';

export default class PricingRules {
  constructor(customerName) {
    const customer = RULES.find(({ customer }) => customer === customerName);
    this.rules = (customer && customer.rules) || [];
  }
  getProductRule = type => {
    return this.rules.find(rule => rule.product === type);
  };
}
