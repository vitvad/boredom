/**
Difficulty: Hard
Category: Searching
Shifted Binary Search

Write a function that takes in a sorted array of distinct integers as well as a target integer.
The caveat is that the integers in the array have been shifted by some amount;
in other words, they've been moved to the left or to the right by one or more positions.
 For example, [1, 2, 3, 4] might have turned into [3, 4, 1, 2].

The function should use a variation of the Binary Search algorithm to determine if the target integer is contained in the array and should return its index if it is, otherwise -1.

If you're unfamiliar with Binary Search, we recommend watching the Conceptual Overview section of the Binary Search question's video explanation before starting to code.

Sample Input
array = [45, 61, 71, 72, 73, 0, 1, 21, 33, 37]
target = 33

Sample Output
8
Hints
Hint 1

The Binary Search algorithm involves a left pointer and a right pointer and using those pointers to find the middle number in an array. Unlike with a normal sorted array however, you cannot simply find the middle number of the array and compare it to the target here, because the shift could lead you in the wrong direction. Instead, realize that whenever you find the middle number in the array, the following two scenarios are possible (assuming the middle number is not equal to the target number, in which case you're done): either the left-pointer number is smaller than or equal to the middle number, or it is bigger. Figure out a way to eliminate half of the array depending on the scenario.

Hint 2

In the scenario where the left-pointer number is smaller than or equal to the middle number, two other scenarios can arise: either the target number is smaller than the middle number and greater than or equal to the left-pointer number, or it's not. In the first scenario, the right half of the array can be eliminated; in the second scenario, the left half can be eliminated. Figure out the scenarios that can arise if the left-pointer number is greater than the middle number and apply whatever logic you come up with recursively until you find the target number or until you run out of numbers in the array.

Hint 3

Can you implement this algorithm iteratively? Are there any advantages to doing so?

Optimal Space & Time Complexity

O(log(n)) time | O(1) space - where n is the length of the input array
 */


function shiftedBinarySearch(
  array,
  target,
  left = 0,
  right = array.length - 1
) {
  // Write your code here.
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[left] <= array[mid]) {
      if (array[mid] > target && target >= array[left]) {
        right = mid - 1; // explore left (sorted)
      } else {
        left = mid + 1; // explore right
      }
    } else {
      if (array[mid] < target && target <= array[right]) {
        left = mid + 1; // explore right (sorted)
      } else {
        right = mid - 1; // explore left
      }
    }
  }
  return -1;
}


let tests = [
  {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    search: 5,
    res: 4,
  },
  {
    list: [5, 6, 7, 8, 9, 1, 2, 3, 4],
    search: 5,
    res: 0,
  },

  {
    list: [5, 6, 7, 8, 9, 1, 2, 3, 4],
    search: 777,
    res: -1,
  },
  {
    list: [5, 6, 7, 8, 9, 1, 2, 3, 4],
    search: -22,
    res: -1,
  },

  {
    list: [5, 6, 7, 8, 9, 10, 11, -22, 1, 2, 3, 4],
    search: -22,
    res: 7,
  },
];

for (let v of tests) {
  let r = shiftedBinarySearch(v.list, v.search);
  console.log(r, r === v.res ? "GOOD" : "NOPE");
}
