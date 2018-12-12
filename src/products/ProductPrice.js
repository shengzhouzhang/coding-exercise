import round from '../utils/round';

export default class ProductType {
  constructor(defaultPrice) {
    this.defaultPrice = defaultPrice;
  }
  getPriceWithDefaultValue = count => {
    return round(this.defaultPrice * count);
  };
  buyNForM = (count, { n, m }) => {
    const number = Math.floor(count / n) * m + (count % n);
    return this.getPriceWithDefaultValue(number);
  };
  getPriceWithSetValue = (count, { price }) => {
    return round(price * count);
  };
  getPrice = (count, rule) => {
    const ruleName = (rule && rule.type) || '';
    switch (ruleName) {
      case 'BUY_N_FOR_M':
        return this.buyNForM(count, rule);
      case 'FIXED_PRICE':
        return this.getPriceWithSetValue(count, rule);
      default:
        return this.getPriceWithDefaultValue(count);
    }
  };
}
