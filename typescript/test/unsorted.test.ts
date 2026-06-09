import { afterEach, describe, expect, it, vi } from 'vitest';

import {
  areThereDuplicates,
  averagePair,
  binarySearch,
  bubbleSort,
  cl,
  createNElementArray,
  findLongestPalindrome,
  findLongestSubstring,
  gcd,
  insertionSort,
  isSubsequence,
  linearSearch,
  maxSubArraySum,
  merge,
  mergeIntervals,
  mergeSort,
  minSubArrayLen,
  reverseNoSpecial,
  same,
  sameFrequency,
  search,
  selectionSort,
  stringSearch,
  sumZero,
  swapElement,
  twoSum,
  validAnagram,
  validAnagram2,
} from '../src/index.js';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('utility logging', () => {
  it('passes arguments to console.log', () => {
    const log = vi.spyOn(console, 'log').mockImplementation(() => undefined);

    cl('value', 42);

    expect(log).toHaveBeenCalledWith('value', 42);
  });
});

describe('frequency counters', () => {
  it('checks that one array contains the squares of another with frequency', () => {
    expect(same([1, 2, 3, 2], [9, 1, 4, 4])).toBe(true);
    expect(same([1, 2, 3], [1, 9])).toBe(false);
    expect(same([1, 2, 1], [4, 4, 1])).toBe(false);
  });

  it('checks anagrams with both implementations', () => {
    expect(validAnagram('', '')).toBe(true);
    expect(validAnagram('anagram', 'nagaram')).toBe(true);
    expect(validAnagram('rat', 'car')).toBe(false);

    expect(validAnagram2('', '')).toBe(true);
    expect(validAnagram2('cinema', 'iceman')).toBe(true);
    expect(validAnagram2('aaz', 'zza')).toBe(false);
  });

  it('checks numeric digit frequency', () => {
    expect(sameFrequency(182, 281)).toBe(true);
    expect(sameFrequency(34, 14)).toBe(false);
    expect(sameFrequency(3589578, 5879385)).toBe(true);
    expect(sameFrequency(22, 222)).toBe(false);
  });

  it('detects duplicate variadic values', () => {
    expect(areThereDuplicates(1, 2, 3)).toBe(false);
    expect(areThereDuplicates(1, 2, 2)).toBe(true);
    expect(areThereDuplicates('a', 'b', 'c', 'a')).toBe(true);
  });
});

describe('search and pointer algorithms', () => {
  it('finds a zero-sum pair in a sorted array', () => {
    expect(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])).toEqual([-2, 2]);
    expect(sumZero([1, 2, 3])).toBeUndefined();
  });

  it('searches sorted arrays by value', () => {
    expect(search([1, 2, 3, 4, 5], 4)).toBe(3);
    expect(search([1, 2, 3, 4, 5], 6)).toBe(-1);

    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  it('finds all two-sum index pairs', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([1, 2, 3, 4], 5)).toEqual([0, 3, 1, 2]);
    expect(twoSum([1, 2, 3], 10)).toEqual([]);
  });

  it('detects an average pair in a sorted array', () => {
    expect(averagePair([1, 2, 3], 2.5)).toBe(true);
    expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBe(true);
    expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBe(false);
    expect(averagePair([], 4)).toBe(false);
  });

  it('checks subsequence order across a larger string', () => {
    expect(isSubsequence('hello', 'hello world')).toBe(true);
    expect(isSubsequence('sing', 'sting')).toBe(true);
    expect(isSubsequence('abc', 'abracadabra')).toBe(true);
    expect(isSubsequence('abc', 'acb')).toBe(false);
  });
});

describe('sliding window algorithms', () => {
  it('computes max fixed-window subarray sum', () => {
    expect(maxSubArraySum([100, 200, 300, 400], 2)).toBe(700);
    expect(maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
    expect(maxSubArraySum([2, 3], 3)).toBeNull();
  });

  it('finds the minimum subarray length meeting a target sum', () => {
    expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2);
    expect(minSubArrayLen([2, 1, 6, 5, 4], 9)).toBe(2);
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)).toBe(0);
  });

  it('finds the longest substring without repeating characters', () => {
    expect(findLongestSubstring('')).toBe(0);
    expect(findLongestSubstring('rithmschool')).toBe(7);
    expect(findLongestSubstring('thisisawesome')).toBe(6);
    expect(findLongestSubstring('bbbbbb')).toBe(1);
  });
});

describe('math algorithms', () => {
  it('calculates greatest common divisor', () => {
    expect(gcd(9, 3)).toBe(3);
    expect(gcd(48, 18)).toBe(6);
    expect(gcd(-48, 18)).toBe(6);
    expect(gcd('9', 3)).toBe(false);
  });
});

describe('interval algorithms', () => {
  it('merges overlapping intervals without mutating the input', () => {
    const intervals: [number, number][] = [
      [8, 10],
      [1, 3],
      [2, 6],
      [15, 18],
    ];

    expect(mergeIntervals(intervals)).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
    expect(intervals).toEqual([
      [8, 10],
      [1, 3],
      [2, 6],
      [15, 18],
    ]);
    expect(mergeIntervals([])).toEqual([]);
  });
});

describe('linear and string search', () => {
  it('performs linear search over generic arrays', () => {
    expect(linearSearch([10, 15, 20, 25, 30], 15)).toBe(1);
    expect(linearSearch(['a', 'b', 'c'], 'z')).toBe(-1);
  });

  it('detects substrings', () => {
    expect(stringSearch('fooololl', 'lol')).toBe(true);
    expect(stringSearch('hello', 'z')).toBe(false);
  });
});

describe('sorting and array helpers', () => {
  it('sorts arrays with bubble sort', () => {
    expect(bubbleSort([4, 20, 2, 3, 1])).toEqual([1, 2, 3, 4, 20]);
    expect(bubbleSort(['d', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c', 'd']);
  });

  it('sorts arrays with selection sort', () => {
    expect(selectionSort([4, 20, 2, 3, 1])).toEqual([1, 2, 3, 4, 20]);
    expect(selectionSort<string>([])).toEqual([]);
  });

  it('sorts arrays with insertion sort', () => {
    expect(insertionSort([4, 20, 2, 3, 1])).toEqual([1, 2, 3, 4, 20]);
    expect(insertionSort([3, 2, 1])).toEqual([1, 2, 3]);
  });

  it('merges sorted arrays', () => {
    expect(merge([1, 10, 50], [2, 14, 99, 100])).toEqual([
      1, 2, 10, 14, 50, 99, 100,
    ]);
    expect(merge(['a', 'c'], ['b', 'd'])).toEqual(['a', 'b', 'c', 'd']);
  });

  it('sorts arrays with merge sort', () => {
    expect(mergeSort([10, 24, 76, 73, 72, 1, 9])).toEqual([
      1, 9, 10, 24, 72, 73, 76,
    ]);
    expect(mergeSort(['delta', 'alpha', 'charlie'])).toEqual([
      'alpha',
      'charlie',
      'delta',
    ]);
  });

  it('creates arrays of random numbers', () => {
    const values = createNElementArray(5);

    expect(values).toHaveLength(5);
    expect(values.every((value) => value >= 0 && value < 1)).toBe(true);
  });

  it('swaps array elements in place', () => {
    const values = ['a', 'b', 'c'];

    swapElement(values, 0, 2);

    expect(values).toEqual(['c', 'b', 'a']);
  });
});

describe('string transformation algorithms', () => {
  it('reverses letters without moving special characters', () => {
    expect(reverseNoSpecial('J$hnisagoodb%y')).toBe('y$bdoogasinh%J');
    expect(reverseNoSpecial('a,b$c')).toBe('c,b$a');
  });

  it('finds the longest palindromic substring', () => {
    expect(findLongestPalindrome('erisbeterkayyakk')).toBe('kayyak');
    expect(findLongestPalindrome('babad')).toBe('bab');
    expect(findLongestPalindrome('')).toBe('');
  });
});
