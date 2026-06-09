"use strict";

type Comparable = number | string;
type Interval = [number, number];

export function cl(...args: unknown[]): void {
  console.log(...args);
}

// Frequency counter/same - 3N
export function same(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const frequencyCounter1: Record<number, number> = {};
  const frequencyCounter2: Record<number, number> = {};

  for (const val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (const val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (const key in frequencyCounter1) {
    if (frequencyCounter2[Number(key) ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

// Frequency counting - 3N version
export function validAnagram(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) {
    return false;
  }

  const str1Counter: Record<string, number> = {};
  const str2Counter: Record<string, number> = {};

  for (const ch of str1) {
    str1Counter[ch] = str1Counter[ch] ? str1Counter[ch] + 1 : 1;
  }

  for (const ch of str2) {
    str2Counter[ch] = str2Counter[ch] ? str2Counter[ch] + 1 : 1;
  }

  for (const key in str1Counter) {
    if (str1Counter[key] !== str2Counter[key]) {
      return false;
    }
  }

  return true;
}

// Frequency counting - anagram - 2N version
export function validAnagram2(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup: Record<string, number> = {};

  for (let i = 0; i < str1.length; ++i) {
    const letter = str1[i];
    lookup[letter] = lookup[letter] ? lookup[letter] + 1 : 1;
  }

  for (let i = 0; i < str2.length; i++) {
    const letter = str2[i];

    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// Multiple pointers
export function sumZero(arr: number[]): [number, number] | undefined {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }

  return undefined;
}

// O(log(N)) array value search
export function search(arr: number[], val: number): number {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    const middle = Math.floor((min + max) / 2);
    const currentElement = arr[middle];

    if (val > currentElement) {
      min = middle + 1;
    } else if (val < currentElement) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

// numbers as args
export function sameFrequency(num1: number, num2: number): boolean {
  const num1String = num1.toString();
  const num2String = num2.toString();

  if (num1String.length !== num2String.length) {
    return false;
  }

  const freqNum1: Record<string, number> = {};
  const freqNum2: Record<string, number> = {};

  for (const num of num1String) {
    freqNum1[num] = (freqNum1[num] || 0) + 1;
  }

  for (const num of num2String) {
    freqNum2[num] = (freqNum2[num] || 0) + 1;
  }

  for (const letter of num1String) {
    if (freqNum1[letter] !== freqNum2[letter]) {
      return false;
    }
  }

  return true;
}

export function areThereDuplicates(...args: unknown[]): boolean {
  const memo = new Set<unknown>();

  for (const arg of args) {
    if (memo.has(arg)) {
      return true;
    }

    memo.add(arg);
  }

  return false;
}

// Two sum - O(N^2)
export const twoSum = (arr: number[], target: number): number[] => {
  const result: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push(i);
        result.push(j);
      }
    }
  }

  return result;
};

// Merges/Consolidates tuples in overlapping ranges
export function mergeIntervals(intervals: Interval[]): Interval[] {
  if (!intervals.length) {
    return [];
  }

  const sorted = intervals
    .map(([start, end]): Interval => [start, end])
    .sort((a, b) => a[0] - b[0]);
  const merged: Interval[] = [sorted[0]];

  for (const [start, end] of sorted.slice(1)) {
    const previous = merged[merged.length - 1];

    if (start <= previous[1]) {
      previous[1] = Math.max(previous[1], end);
    } else {
      merged.push([start, end]);
    }
  }

  return merged;
}

// O(N)
// Multiple pointers
export function averagePair(arr: number[], targetAvg: number): boolean {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const avg = (arr[left] + arr[right]) / 2;

    if (avg === targetAvg) {
      return true;
    } else if (avg > targetAvg) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}

// Multiple pointers
// O(N + M)
export function isSubsequence(str1: string, str2: string): boolean {
  if (!str1) return true;

  for (let i = 0, j = 0; j < str2.length; j++) {
    if (str1[i] === str2[j]) {
      i++;
    }

    if (i === str1.length) {
      return true;
    }
  }

  return false;
}

// Sliding window O(N)
export function maxSubArraySum(arr: number[], num: number): number | null {
  if (num > arr.length) {
    return null;
  }

  let max = 0;
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }

  let tempSum = max;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];

    max = Math.max(max, tempSum);
  }

  return max;
}

// cl(gcd(9, 3));
export function gcd(x: unknown, y: unknown): number | false {
  if (typeof x !== "number" || typeof y !== "number") return false;

  let absX = Math.abs(x);
  let absY = Math.abs(y);

  while (absY) {
    const newX = absY;
    absY = absX % absY;
    absX = newX;
  }

  return absX;
}

export function minSubArrayLen(nums: number[], sum: number): number {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

export function findLongestSubstring(str: string): number {
  let longest = 0;
  const seen: Record<string, number> = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

// cl(findLongestSubstring('thecatinthehat'));

export function linearSearch<T>(arr: T[], val: T): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }

  return -1;
}

export function binarySearch(arr: number[], value: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const element = arr[middle];

    if (element === value) {
      return middle;
    } else if (value > element) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

export function stringSearch(str: string, substr: string): boolean {
  let match = false;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < substr.length; j++) {
      if (str[i + j] !== substr[j]) {
        break;
      }

      if (j === substr.length - 1) {
        match = true;
      }
    }
  }

  return match;
}

// console.log(stringSearch('fooololl', 'lol'));

export function bubbleSort<T extends Comparable>(arr: T[]): T[] {
  let swapped;

  for (let i = arr.length - 1; i > 0; i++) {
    swapped = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return arr;
}

export function selectionSort<T extends Comparable>(arr: T[]): T[] {
  if (!arr.length) {
    return arr;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    let lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    if (lowest !== i) {
      const temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }

  return arr;
}

// console.log(selectionSort([4, 20, 2, 3, 1, 17, 5, 7, 10, 8]));

export function createNElementArray(num: number): number[] {
  return Array.from({ length: num }, () => Math.random());
}

export function swapElement<T>(arr: T[], idx: number, idx2: number): void {
  const temp = arr[idx];
  arr[idx] = arr[idx2];
  arr[idx2] = temp;
}

export function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
}

// console.log(insertionSort(createNElementArray(1000000)));
// const data = Array.apply(1, { length: 100000 });
// console.log(data);
// const data2 = Array.apply(null, { length: 100000 }).map(Function.call, Math.random);
// console.log(data2);
// bubbleSort(data2);

export function merge<T extends Comparable>(arr: T[], arr2: T[]): T[] {
  const newArr: T[] = [];

  let i = 0;
  let j = 0;

  while (i < arr.length && j < arr2.length) {
    if (arr[i] <= arr2[j]) {
      newArr.push(arr[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr.length) {
    newArr.push(arr[i]);
    i++;
  }

  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }

  return newArr;
}

export function mergeSort<T extends Comparable>(arr: T[]): T[] {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

// console.log(mergeSort(Array.apply(null, { length: 100000 }).map(Function.call, Math.random)));

// GEEKS FOR GEEKS practice
export function reverseNoSpecial(str: string): string {
  const reversed = str.split('');

  let left = 0;
  let right = reversed.length - 1;

  while (left < right) {
    if (!/[A-Za-z]/.test(reversed[left])) {
      left++;
    } else if (!/[A-Za-z]/.test(reversed[right])) {
      right--;
    } else {
      swapElement(reversed, left, right);
      left++;
      right--;
    }
  }

  return reversed.join('');
}

// console.log(reverseNoSpecial('J$hnisagoodb%y'));

export const findLongestPalindrome = function (str: string): string {
  let max = 0;
  let longest: Interval = [0, 0];

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length + 1; j++) {
      const length = j - i;
      const subStr = str.slice(i, j);
      const reversed = subStr.split('').reverse().join('');

      if (subStr === reversed) {
        if (length > max) {
          longest = [i, j];
          max = length;
        }
      }
    }
  }

  return str.slice(longest[0], longest[1]);
};

// console.log(longestPalindrome('erisbeterkayyakk'));
