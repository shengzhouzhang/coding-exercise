import { getProductByType, classic, standout, premium } from './Products';

describe('getProductByType', () => {
  it('should return classic', () => {
    const result = getProductByType('classic');
    expect(result).toEqual(classic);
  });

  it('should return standout', () => {
    const result = getProductByType('standout');
    expect(result).toEqual(standout);
  });

  it('should return premium', () => {
    const result = getProductByType('premium');
    expect(result).toEqual(premium);
  });

  it('should throw Error', () => {
    expect(() => {
      getProductByType();
    }).toThrowError('Unknow Product Type');
  });
});

describe('classic', () => {
  it('should has default price 269.99', () => {
    expect(classic.defaultPrice).toEqual(269.99);
  });
});

describe('standout', () => {
  it('should has default price 322.99', () => {
    expect(standout.defaultPrice).toEqual(322.99);
  });
});

describe('premium', () => {
  it('should has default price 394.99', () => {
    expect(premium.defaultPrice).toEqual(394.99);
  });
});
