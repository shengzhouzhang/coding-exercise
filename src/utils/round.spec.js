import round from './round';

describe('round', () => {
  it('should round number and keep two decimal', () => {
    const result = round(100.6666);
    const expected = 100.67;
    expect(result).toBe(expected);
  });
});
