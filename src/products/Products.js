import products from '../config/products.json';
import ProductPrice from './ProductPrice';

export const classic = new ProductPrice(products.classic.price);
export const standout = new ProductPrice(products.standout.price);
export const premium = new ProductPrice(products.premium.price);

export function getProductByType(type) {
  switch (type) {
    case 'classic':
      return classic;
    case 'standout':
      return standout;
    case 'premium':
      return premium;
    default:
      throw new Error('Unknow Product Type');
  }
}
