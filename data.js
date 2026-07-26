const dsaData = [
  {
    id: "module-1",
    title: "Module 1: Basics & Foundations",
    description: "Master time & space complexity, Big-O notation, recursion fundamentals, and basic problem solving.",
    topics: [
      {
        id: "time-complexity",
        title: "Time & Space Complexity",
        difficulty: "Easy",
        timeEst: "15 mins",
        notes: `
          <p><strong>Time Complexity</strong> quantifies the amount of time taken by an algorithm to run as a function of the length of the input.</p>
          <p><strong>Space Complexity</strong> refers to the total amount of memory space used by an algorithm, including space for inputs and auxiliary space.</p>
          <br>
          <p>Common Time Complexities (from best to worst):</p>
          <ul>
            <li><code>O(1)</code> - Constant Time (e.g., Array lookup by index)</li>
            <li><code>O(log N)</code> - Logarithmic Time (e.g., Binary Search)</li>
            <li><code>O(N)</code> - Linear Time (e.g., Single loop over elements)</li>
            <li><code>O(N log N)</code> - Log-Linear Time (e.g., Merge Sort, Quick Sort)</li>
            <li><code>O(N^2)</code> - Quadratic Time (e.g., Nested loops, Bubble Sort)</li>
          </ul>
        `,
        codeSnippet: `// O(N) Time Complexity Example
function findMax(arr) {
  let max = arr[0];
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log("Max Element:", findMax([3, 7, 2, 9, 5]));`,
        vizType: "array-search",
        problems: [
          { name: "Single Number (LeetCode 136)", link: "https://leetcode.com/problems/single-number/" },
          { name: "Fibonacci Number (LeetCode 509)", link: "https://leetcode.com/problems/fibonacci-number/" }
        ]
      },
      {
        id: "arrays-1d-2d",
        title: "Arrays (1D & 2D Matrices)",
        difficulty: "Easy",
        timeEst: "20 mins",
        notes: `
          <p>An <strong>Array</strong> is a contiguous memory block holding homogeneous data elements. In JavaScript, arrays are dynamic objects capable of storing mixed types.</p>
          <p>Key operations & patterns:</p>
          <ul>
            <li>Two Pointers technique</li>
            <li>Sliding Window pattern</li>
            <li>Prefix Sum arrays</li>
            <li>2D Matrix traversals (Row-major, Column-major, Spiral)</li>
          </ul>
        `,
        codeSnippet: `// Reverse Array in-place (Two Pointer Technique)
function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  while(left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
}

console.log("Reversed:", reverseArray([1, 2, 3, 4, 5]));`,
        vizType: "two-pointers",
        problems: [
          { name: "Two Sum (LeetCode 1)", link: "https://leetcode.com/problems/two-sum/" },
          { name: "Best Time to Buy and Sell Stock (LeetCode 121)", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" }
        ]
      }
    ]
  },
  {
    id: "module-2",
    title: "Module 2: Searching & Sorting Algorithms",
    description: "Understand Linear Search, Binary Search (and its variations), Bubble, Selection, Insertion, Merge, and Quick Sort.",
    topics: [
      {
        id: "binary-search",
        title: "Binary Search",
        difficulty: "Medium",
        timeEst: "25 mins",
        notes: `
          <p><strong>Binary Search</strong> is an efficient algorithm for searching in a sorted array by repeatedly dividing the search interval in half.</p>
          <p>Time Complexity: <code>O(log N)</code></p>
          <p>Space Complexity: <code>O(1)</code> iterative, <code>O(log N)</code> recursive.</p>
        `,
        codeSnippet: `function binarySearch(arr, target) {
  let low = 0, high = arr.length - 1;
  while(low <= high) {
    let mid = Math.floor((low + high) / 2);
    if(arr[mid] === target) return mid;
    else if(arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

console.log("Index of 7:", binarySearch([1, 3, 5, 7, 9, 11], 7));`,
        vizType: "binary-search",
        problems: [
          { name: "Binary Search (LeetCode 704)", link: "https://leetcode.com/problems/binary-search/" },
          { name: "Search in Rotated Sorted Array (LeetCode 33)", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/" }
        ]
      },
      {
        id: "bubble-sort",
        title: "Bubble & Selection Sort",
        difficulty: "Easy",
        timeEst: "20 mins",
        notes: `
          <p><strong>Bubble Sort</strong> repeatedly swaps adjacent elements if they are in the wrong order.</p>
          <p>Time Complexity: <code>O(N^2)</code> worst/average case.</p>
        `,
        codeSnippet: `function bubbleSort(arr) {
  let n = arr.length;
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n - i - 1; j++) {
      if(arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  return arr;
}

console.log("Sorted Array:", bubbleSort([64, 34, 25, 12, 22, 11, 90]));`,
        vizType: "bubble-sort",
        problems: [
          { name: "Sort Colors (LeetCode 75)", link: "https://leetcode.com/problems/sort-colors/" }
        ]
      }
    ]
  },
  {
    id: "module-3",
    title: "Module 3: Data Structures (LinkedList, Stack, Queue)",
    description: "In-depth study of Singly/Doubly Linked Lists, Stacks, Queues, Monotonic Stack pattern, and implementations.",
    topics: [
      {
        id: "linked-list",
        title: "Singly & Doubly Linked List",
        difficulty: "Medium",
        timeEst: "30 mins",
        notes: `
          <p>A <strong>Linked List</strong> is a linear data structure where elements are not stored at contiguous memory locations, connected via pointers/references.</p>
        `,
        codeSnippet: `class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(val) {
    const newNode = new Node(val);
    if (!this.head) { this.head = newNode; return; }
    let curr = this.head;
    while (curr.next) curr = curr.next;
    curr.next = newNode;
  }
}

const list = new LinkedList();
list.append(10);
list.append(20);
console.log("Head value:", list.head.val);`,
        vizType: "linked-list",
        problems: [
          { name: "Reverse Linked List (LeetCode 206)", link: "https://leetcode.com/problems/reverse-linked-list/" },
          { name: "Linked List Cycle (LeetCode 141)", link: "https://leetcode.com/problems/linked-list-cycle/" }
        ]
      }
    ]
  }
];
