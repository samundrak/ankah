const ankah = require('./index');

describe('Test ankah', () => {
  it('should convert nepali number to english', () => {
    expect(ankah.toAnkah(123456789)).toBe('०१२३४५६७८९');
  });
  it('should convert english number to nepali', () => {});
});
