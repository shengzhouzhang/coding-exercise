import _ from 'lodash';
import { getProductByType } from './products/Products';

export default class Checkout {
  constructor(pricingRules) {
    this.pricingRules = pricingRules;
  }
  items = [];
  add = itemName => {
    this.items.push(itemName);
  };
  getProductRule = (count, product) => {
    const rule = this.pricingRules.getProductRule(product);
    return { product, count, rule };
  };
  getProductPrice = ({ product, count, rule = {} }) => {
    return getProductByType(product).getPrice(count, rule);
  };
  getTotalPrice = () => {
    return _.chain(this.items)
      .countBy()
      .map(this.getProductRule)
      .map(this.getProductPrice)
      .sum()
      .valueOf();
  };
}
