"use script"

// task js.info 2.9

5 > 4 // true
"apple" > "pineapple" // false, a comes before p in the unicode alphabet so a < p
"2" > "12" // true, since both values are strings, 2 > 1 in the dictionary
undefined == null // true, undefined and null are equal in js
undefined === null // false, undefined and null aren't the same type
null == "\n0\n" // false, null only equals undefined
null === +"\n0\n" // false, strict equality of different types