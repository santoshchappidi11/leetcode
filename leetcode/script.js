// 	15-3Sum-------------------------------------->
// let nums = [-1, 0, 1, 2, -1, -4];
// nums = [0, 1, 1];
// Output: [
//   [-1, -1, 2],
//   [-1, 0, 1],
// ];

// function triplets(nums) {
//   let finalResult = [];
//   let flag = false;

//   for (let i = 0; i < nums.length - 2; i++) {
//     for (let j = i + 1; j < nums.length - 1; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] == 0) {
//           flag = true;
//           finalResult.push([nums[i], nums[j], nums[k]]);
//         }
//       }
//     }
//   }

//   if (!flag) {
//     finalResult = [];
//   }

//   return finalResult;
// }

// console.log(triplets(nums));

//16. 3Sum Closest----------------------------------------------------------->
// let nums = [-1, 2, 1, -4]; //(target = 1); // Output: 2;
// let nums = [0, 0, 0]; //target = 1 //Output: 0
// let nums = [0, 1, 2];

// const findTarget = (nums, target) => {};

// console.log(findTarget(nums, target));

// 33. Search in Rotated Sorted Array---------------------------------->
// IF smallest <= target <= biggest
//   then target is here
// ELSE
//   then target is on the other side

// Input: (nums = [4, 5, 6, 7, 0, 1, 2]), (target = 0);
// Output: 4;

// var search = function (nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (nums[mid] === target) {
//       return mid;
//     }

//     // When dividing the roated array into two halves, one must be sorted.

//     // Check if the left side is sorted
//     if (nums[left] <= nums[mid]) {
//       if (nums[left] <= target && target <= nums[mid]) {
//         // target is in the left
//         right = mid - 1;
//       } else {
//         // target is in the right
//         left = mid + 1;
//       }
//     }

//     // Otherwise, the right side is sorted
//     else {
//       if (nums[mid] <= target && target <= nums[right]) {
//         // target is in the right
//         left = mid + 1;
//       } else {
//         // target is in the left
//         right = mid - 1;
//       }
//     }
//   }

//   return -1;
// };

// console.log(search(nums, target));

// 46. Permutations-------------------------------------------------------->
// Input: nums = [1, 2, 3];
// Output: [
//   [1, 2, 3],
//   [1, 3, 2],
//   [2, 1, 3],
//   [2, 3, 1],
//   [3, 1, 2],
//   [3, 2, 1],
// ];

// const permute = (nums) => {
//   // Backtracking
//   const used = new Set(); // Keep track of what we have used
//   const path = []; // Current potiential answer array
//   const res = []; // Result array to be returned

//   const dfs = () => {
//     // If path is same length as nums, we know we have an answer. Push it to res array
//     if (path.length === nums.length) {
//       //   console.log(res, "result");
//       res.push([...path]); // We use spread operator to clone since arrays are pass by reference
//     }

//     // Every DFS we loop all numbers
//     for (let i = 0; i < nums.length; i++) {
//       // We can skip these numbers if they have been used
//       //   console.log(nums[i], "value");
//       //   console.log(used.has(nums[i]), "already used...");
//       if (used.has(nums[i])) continue;

//       // Add to our potienial answer array and make it used by adding to used set
//       path.push(nums[i]);
//       //   console.log(path, "path");
//       used.add(nums[i]);
//       //   console.log(used, "used");

//       // After adding, we call DFS again. DFS will continue till we hit the base case above
//       // Think of this as just continuing down a path till we have an answer
//       dfs();

//       // Once we pop out of DFS, we need to remove from path array and remove from used Set
//       // This will let it be used later in further paths
//       path.pop();
//       //   console.log(path, "path pop");
//       used.delete(nums[i]);
//       //   console.log(used, "used delete");
//     }
//   };

//   // Start DFS
//   // All variables are global, no need to pass in anything
//   dfs();

//   return res;
// };

// console.log(permute(nums));

//48. Rotate Image---------------------------------------------->

// Input: matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// Output: [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3],
// ];

// var rotate = function (matrix) {
//   const n = matrix.length;
//   //   console.log(n);

//   // Transposing the matrix
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < i; j++) {
//       [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//     }
//   }

//   // Reversing each row of the matrix
//   for (let i = 0; i < n; i++) {
//     matrix[i].reverse();
//   }

//   return matrix;
// };

// console.log(rotate(matrix));

// 35. ------------------------------->
// Input: (nums = [1, 3, 5, 6]), (target = 2);
// Output: 2;
// const searchInsertpos = (nums, target) => {
//   let left = 0;
//   let right = nums.length - 1;

//   for (let i = 0; i < nums.length; i++) {
//     const mid = Math.floor((left + right) / 2);
//     // console.log(mid, "mid");

//     if (nums[mid] == target) {
//       return mid;
//     } else if (target < nums[mid]) {
//       right = mid - 1;
//       // console.log(right, "right");
//     } else {
//       left = mid + 1;
//       // console.log(left, "left");
//     }
//   }

//   return left;
// };

// console.log(searchInsertpos(nums, target));

// 88-------------------------------------------------------->
// let nums1 = [1, 2, 3, 0, 0, 0];
// let nums2 = [2, 5, 6];

// const merge = (nums1, nums2) => {
//   let mergedArray = [];

//   for (let i = 0; i < nums1.length; i++) {
//     if (nums1[i] == 0) {
//       mergedArray.push();
//     } else {
//       mergedArray.push(nums1[i]);
//     }
//   }

//   for (let i = 0; i < nums2.length; i++) {
//     if (nums2[i] == 0) {
//       mergedArray.push();
//     } else {
//       mergedArray.push(nums2[i]);
//     }
//   }

//   const finalArray = mergedArray.sort();

//   return finalArray;
// };

// console.log(merge(nums1, nums2));

// 217------------------------------------------------------>

// let nums = [1, 2, 2, 3, 4];
// Output: true;

// const findDuplicate = (nums) => {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] == nums[j]) {
//         return true;
//       }
//     }
//   }

//   return false;
// };

// console.log(findDuplicate(nums));

// 268----------------------------------------->
// Input: nums = [9, 6, 4, 2, 3, 5, 7, 1, 0];
// Output: 1;

// const missingNumber = (nums) => {
//   let n = nums.sort((a, b) => a - b);
//   // console.log(n);

//   for (let i = 0; i < n.length; i++) {
//     console.log(i);
//     if (!n.includes(i)) {
//       return i;
//     }
//   }
// };

// console.log(missingNumber(nums));

// 283------------------------------------------>

// Input: nums = [0, 1, 0, 3, 12];
// Output: [1, 3, 12, 0, 0];

// const moveZeros = (nums) => {
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] == 0) {
//       nums.splice(i, 1);
//       nums.push(0);
//     }
//   }

//   return nums;
// };

// console.log(moveZeros(nums));

// 303---------------------------------------->

// let nums = [-2, 0, 3, -5, 2, -1];

// const rangeSumQuery = (left, right) => {
//   let totalSum = 0;

//   for (let i = left; i <= right; i++) {
//     totalSum = totalSum + nums[i];
//   }

//   return totalSum;
// };

// console.log(rangeSumQuery(0, 2));
// console.log(rangeSumQuery(2, 5));
// console.log(rangeSumQuery(0, 5));

// 349.---------------------------------------->
// nums1 = [4, 9, 5, 8];
// nums2 = [9, 4, 9, 8, 4];

// const IntersectionArrays = (nums1, nums2) => {
//   let finalArr = [];

//   for (let i = 0; i < nums1.length; i++) {
//     for (let j = 0; j < nums2.length; j++) {
//       if (nums1[i] == nums2[j]) {
//         if (!finalArr.includes(nums1[i])) {
//           finalArr.push(nums1[i]);
//         }
//       }
//     }
//   }

//   return finalArr;
// };

// console.log(IntersectionArrays(nums1, nums2));

// 455------------------------------------------------------->

// g = [1, 2, 3];
// s = [2];

// let g = [1, 2, 3];
// let s = [3];

// const assignCookies = (g, s) => {
//   let total = 0;

//   for (let i = 0; i < g.length; i++) {
//     for (let j = 0; j < s.length; j++) {
//       if (s[j] >= g[i]) {
//         total += 1;
//       }
//     }
//   }

//   return total;
// };

// console.log(assignCookies(g, s));

// 500---------------------------------------------->
// Input: words = ["Hello", "Alaska", "Dad", "Peace"];
// Output: ["Alaska", "Dad"];

// const keyboardRow = (words) => {
//   let row1 = "qwertyuiop";
//   let row2 = "asdfghjkl";
//   let row3 = "zxcvbnm";

//   for (let i = 0; i < words.length; i++) {
//     const finalArray = words.filter((word) => {
//       const singleWordArray = word.toLowerCase().split("");
//       console.log(singleWordArray);

//       let result =
//         singleWordArray.every((char) => row1.includes(char)) ||
//         singleWordArray.every((char) => row2.includes(char)) ||
//         singleWordArray.every((char) => row3.includes(char));
//       return result;
//     });
//     return finalArray;
//   }
// };

// console.log(keyboardRow(words));

// 506------------------------------------------------>

// let score = [10, 3, 8, 9, 4];
// // Output: ["Gold Medal", "5", "Bronze Medal", "Silver Medal", "4"];

// var findRelativeRanks = function (score) {
//   const sortedScore = score.sort((a, b) => b - a);
//   //   console.log(score, "score");
//   //   console.log(sortedScore, "sorted");
//   const res = [];

//   score.map((num) => {
//     // console.log(num);
//     if (sortedScore.indexOf(num) == 0) {
//       res.push("Gold Medal");
//     } else if (sortedScore.indexOf(num) == 1) {
//       res.push("Silver Medal");
//     } else if (sortedScore.indexOf(num) == 2) {
//       res.push("Bronze Medal");
//     } else if (sortedScore.indexOf(num) == 3) {
//       res.push((4).toString());
//     } else {
//       res.push((5).toString());
//     }
//   });
//   return res;
// };

// console.log(findRelativeRanks(score));

// 566. Reshape the Matrix-------------------------------->

// Input: (mat = [
//   [1, 2],
//   [3, 4],
// ]),
//   (r = 2),
//   (c = 4);
// Output: [
//   [1, 2],
//   [3, 4],
// ];

// const reshapeMatrix = (mat, r, c) => {
//   const flatMatrix = mat.flat();

//   if (flatMatrix.length != r * c) return mat;

//   return [...Array(r)].map(() => flatMatrix);
// };

// console.log(reshapeMatrix(mat, r, c));

// 575. Distribute Candies---------------------------------------->

// Input: candyType = [1, 1, 2, 2, 3, 3];
// Output: 3;

// const distributeCandies = (candyType) => {
//   const uniqueCandies = [...new Set(candyType)];

//   const doctorSaidToEat = candyType.length / 2;

//   return uniqueCandies >= doctorSaidToEat
//     ? doctorSaidToEat
//     : uniqueCandies.length;
// };

// console.log(distributeCandies(candyType));

// 628. Maximum Product of three Numbers----------------------------->
// Input: nums = [-1, -2, -3];
// Output: 6;

// const maxProdOfThreeNumbers = (nums) => {
//   const sortedNums = nums.sort((a, b) => b - a);

//   return sortedNums[0] * sortedNums[1] * sortedNums[2];
// };

// console.log(maxProdOfThreeNumbers(nums));

// 599. Minimum Index Sum of Two Lists---------------------------->
// Input: (list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]),
//   (list2 = ["KFC", "Shogun", "Burger King"]);
// Output: ["Shogun"];

// const sumOfMinimumIndex = (list1, list2) => {
//   for (let i = 0; i < list1.length; i++) {
//     for (let j = 0; j < list2.length; j++) {
//       if (list1[i] == list2[j]) {
//         console.log(Math.min(i + j));
//       }
//     }
//   }
// };

// sumOfMinimumIndex(list1, list2);

// 643.Maximum Average Subarray I--------------------------------------->
// Input: (nums = [1, 12, -5, -6, 50, 3]), (k = 4);
// Output: 12.75;

// // Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

// var findMaxAverage = function (nums, k) {
//   let sum = 0;
//   for (let i = 0; i < k; i++) {
//     sum += nums[i];
//   }

//   console.log(sum, "sum");
//   let max = sum;
//   for (let i = k; i < nums.length; i++) {
//     console.log(sum, nums[i - k], nums[i], "here");
//     sum = sum - nums[i - k] + nums[i];
//     max = Math.max(max, sum);
//   }

//   return max / k;
// };

// console.log(findMaxAverage(nums, k));

// 645.Set Mismatch---------------------------------------->
// Input: nums = [1, 1];
// Output: [1, 2];

// const misMatch = (nums) => {
//   let finalArr = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == nums[i + 1]) {
//       finalArr.push(nums[i]);
//     }
//   }

//   for (let i = 0; i < nums.length; i++) {
//     if (nums.includes(i) == false && i != 0) {
//       finalArr.push(i);
//     }
//   }

//   return finalArr;
// };

// console.log(misMatch(nums));
