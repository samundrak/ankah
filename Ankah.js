const NEPALI_NUMBERS = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
const NP_TO_EN_MAP = {
  '०': 0,
  '१': 1,
  '२': 2,
  '३': 3,
  '४': 4,
  '५': 5,
  '६': 6,
  '७': 7,
  '८': 8,
  '९': 9,
};

function conversion(number, comparer) {
  return String(number)
    .split('')
    .map(comparer)
    .join('');
}
module.exports = {
  toAnkah(enNumber) {
    return conversion(enNumber, (item) => NEPALI_NUMBERS[Number(item)]);
  },
  toAngreji(npNumber) {
    return conversion(npNumber, (item) => NP_TO_EN_MAP[item]);
  },
};
