# Day 4

## Table of Content

- Comparisons

## Comparisons

In Javascript, every comparison operator returns a boolean value (see [jour-2.md](../semaine-1/jour-2.md) if you forgot what a boolean is).

### String comparison

To see if `"string 1" > (greater than), < (lesser than), >= <= (greater/lesser or equal), == (equals), != (not equal) "string 2"` Javascript uses a peculiar system:

1. It compares the first character of both strings
2. If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
3. Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
4. Repeat until the end of either string.
5. If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.

> **Warning**: Since Javascript uses Unicode in its internal incoding table, Capital Letters have a different value than their lowercase counterparts.
