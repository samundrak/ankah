#Ankah

Ankah Helps you convert your nepali number to english or from english to nepali number.
Ankah also provides method to compare two nepali numbers.

# Install

    npm i ankah

# Usage

```
// Import Ankah
const ankah = require('ankah');

// Convert nepali to english
console.log(ankah.toAngreji('१०२३४५६७.८९')); // 10234567.89

// Convert english to nepali
console.log(ankah.toAnkah(1023456789.9)); // १०२३४५६७८९.९

// compare nepali numbers
console.log(ankah.compareAnkah(num11, num10).isGreaterThan()); // true
console.log(ankah.compareAnkah(num10, num10).isEqual()); // true;
console.log(ankah.compareAnkah(num9, num10).isLessThan()); // true
console.log(ankah.compareAnkah(num10, num9).isGreaterThanOrEqualTo()); // true
console.log(ankah.compareAnkah(num11, num11).isLessThanOrEqualTo()); true

```
