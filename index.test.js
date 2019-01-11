const ankah = require('./index');

describe('Test ankah', () => {
  it('should convert nepali number to english', () => {
    expect(ankah.toAnkah(1023456789.9)).toBe('१०२३४५६७८९.९');
  });
  it('should convert english number to nepali', () => {
    expect(ankah.toAngreji('१०२३४५६७.८९')).toBe(10234567.89);
  });
  it('should compare nepali numbers', () => {
    const num11 = '११';
    const num10 = '१०';
    const num9 = '९';
    expect(ankah.compareAnkah(num11, num10).isGreaterThan()).toBe(true);
    expect(ankah.compareAnkah(num10, num10).isEqual()).toBe(true);
    expect(ankah.compareAnkah(num9, num10).isLessThan()).toBe(true);
    expect(ankah.compareAnkah(num10, num9).isGreaterThanOrEqualTo()).toBe(true);
    expect(ankah.compareAnkah(num11, num11).isLessThanOrEqualTo()).toBe(true);
  });
});
