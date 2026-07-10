// TODO ==> problem 01 : ------------------------------------->--------------------->

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?



// TODO ==> problem 02 : ---------------------------------------->------------------>

// Given an integer x, return true if x is a palindrome, and false otherwise.



//     Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
//     Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads - 121. From right to left, it becomes 121 -.Therefore it is not a palindrome.
//     Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left.Therefore it is not a palindrome.


//     Constraints:

// -231 <= x <= 231 - 1
 

// Follow up: Could you solve it without converting the integer to a string ?


// TODO ==> problem 03 : ---------------------------------------->------------------>

// 13. Roman to Integer
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

// Constraints:

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].



// TODO ==> problem 04 : ---------------------------------------->------------------>

// 1288. Remove Covered Intervals
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an array intervals where intervals[i] = [li, ri] represent the interval [li, ri), remove all intervals that are covered by another interval in the list.

// The interval [a, b) is covered by the interval [c, d) if and only if c <= a and b <= d.

// Return the number of remaining intervals.

 

// Example 1:

// Input: intervals = [[1,4],[3,6],[2,8]]
// Output: 2
// Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.
// Example 2:

// Input: intervals = [[1,4],[2,3]]
// Output: 1
 

// Constraints:

// 1 <= intervals.length <= 1000
// intervals[i].length == 2
// 0 <= li < ri <= 105
// All the given intervals are unique.



// TODO ==> problem 05 : ---------------------------------------->------------------>

// 3754. Concatenate Non-Zero Digits and Multiply by Sum I
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given an integer n.

// Form a new integer x by concatenating all the non-zero digits of n in their original order. If there are no non-zero digits, x = 0.

// Let sum be the sum of digits in x.

// Return an integer representing the value of x * sum.

 

// Example 1:

// Input: n = 10203004

// Output: 12340

// Explanation:

// The non-zero digits are 1, 2, 3, and 4. Thus, x = 1234.
// The sum of digits is sum = 1 + 2 + 3 + 4 = 10.
// Therefore, the answer is x * sum = 1234 * 10 = 12340.
// Example 2:

// Input: n = 1000

// Output: 1

// Explanation:

// The non-zero digit is 1, so x = 1 and sum = 1.
// Therefore, the answer is x * sum = 1 * 1 = 1.
 

// Constraints:

// 0 <= n <= 109



// TODO ==> problem 06 : ---------------------------------------->------------------>

// 3756. Concatenate Non-Zero Digits and Multiply by Sum II
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given a string s of length m consisting of digits. You are also given a 2D integer array queries, where queries[i] = [li, ri].

// For each queries[i], extract the substring s[li..ri]. Then, perform the following:

// Form a new integer x by concatenating all the non-zero digits from the substring in their original order. If there are no non-zero digits, x = 0.
// Let sum be the sum of digits in x. The answer is x * sum.
// Return an array of integers answer where answer[i] is the answer to the ith query.

// Since the answers may be very large, return them modulo 109 + 7.

 

// Example 1:

// Input: s = "10203004", queries = [[0,7],[1,3],[4,6]]

// Output: [12340, 4, 9]

// Explanation:

// s[0..7] = "10203004"
// x = 1234
// sum = 1 + 2 + 3 + 4 = 10
// Therefore, answer is 1234 * 10 = 12340.
// s[1..3] = "020"
// x = 2
// sum = 2
// Therefore, the answer is 2 * 2 = 4.
// s[4..6] = "300"
// x = 3
// sum = 3
// Therefore, the answer is 3 * 3 = 9.
// Example 2:

// Input: s = "1000", queries = [[0,3],[1,1]]

// Output: [1, 0]

// Explanation:

// s[0..3] = "1000"
// x = 1
// sum = 1
// Therefore, the answer is 1 * 1 = 1.
// s[1..1] = "0"
// x = 0
// sum = 0
// Therefore, the answer is 0 * 0 = 0.
// Example 3:

// Input: s = "9876543210", queries = [[0,9]]

// Output: [444444137]

// Explanation:

// s[0..9] = "9876543210"
// x = 987654321
// sum = 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 45
// Therefore, the answer is 987654321 * 45 = 44444444445.
// We return 44444444445 modulo (109 + 7) = 444444137.
 

// Constraints:

// 1 <= m == s.length <= 105
// s consists of digits only.
// 1 <= queries.length <= 105
// queries[i] = [li, ri]
// 0 <= li <= ri < m



// TODO ==> problem 07 : ---------------------------------------->------------------>

// 3532. Path Existence Queries in a Graph I
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given an integer n representing the number of nodes in a graph, labeled from 0 to n - 1.

// You are also given an integer array nums of length n sorted in non-decreasing order, and an integer maxDiff.

// An undirected edge exists between nodes i and j if the absolute difference between nums[i] and nums[j] is at most maxDiff (i.e., |nums[i] - nums[j]| <= maxDiff).

// You are also given a 2D integer array queries. For each queries[i] = [ui, vi], determine whether there exists a path between nodes ui and vi.

// Return a boolean array answer, where answer[i] is true if there exists a path between ui and vi in the ith query and false otherwise.

 

// Example 1:

// Input: n = 2, nums = [1,3], maxDiff = 1, queries = [[0,0],[0,1]]

// Output: [true,false]

// Explanation:

// Query [0,0]: Node 0 has a trivial path to itself.
// Query [0,1]: There is no edge between Node 0 and Node 1 because |nums[0] - nums[1]| = |1 - 3| = 2, which is greater than maxDiff.
// Thus, the final answer after processing all the queries is [true, false].
// Example 2:

// Input: n = 4, nums = [2,5,6,8], maxDiff = 2, queries = [[0,1],[0,2],[1,3],[2,3]]

// Output: [false,false,true,true]

// Explanation:

// The resulting graph is:



// Query [0,1]: There is no edge between Node 0 and Node 1 because |nums[0] - nums[1]| = |2 - 5| = 3, which is greater than maxDiff.
// Query [0,2]: There is no edge between Node 0 and Node 2 because |nums[0] - nums[2]| = |2 - 6| = 4, which is greater than maxDiff.
// Query [1,3]: There is a path between Node 1 and Node 3 through Node 2 since |nums[1] - nums[2]| = |5 - 6| = 1 and |nums[2] - nums[3]| = |6 - 8| = 2, both of which are within maxDiff.
// Query [2,3]: There is an edge between Node 2 and Node 3 because |nums[2] - nums[3]| = |6 - 8| = 2, which is equal to maxDiff.
// Thus, the final answer after processing all the queries is [false, false, true, true].
 

// Constraints:

// 1 <= n == nums.length <= 105
// 0 <= nums[i] <= 105
// nums is sorted in non-decreasing order.
// 0 <= maxDiff <= 105
// 1 <= queries.length <= 105
// queries[i] == [ui, vi]
// 0 <= ui, vi < n



// TODO ==> problem 08 : ---------------------------------------->------------------>

// 3534. Path Existence Queries in a Graph II
// Solved
// Hard
// Topics
// premium lock icon
// Companies
// Hint
// You are given an integer n representing the number of nodes in a graph, labeled from 0 to n - 1.

// You are also given an integer array nums of length n and an integer maxDiff.

// An undirected edge exists between nodes i and j if the absolute difference between nums[i] and nums[j] is at most maxDiff (i.e., |nums[i] - nums[j]| <= maxDiff).

// You are also given a 2D integer array queries. For each queries[i] = [ui, vi], find the minimum distance between nodes ui and vi. If no path exists between the two nodes, return -1 for that query.

// Return an array answer, where answer[i] is the result of the ith query.

// Note: The edges between the nodes are unweighted.

 

// Example 1:

// Input: n = 5, nums = [1,8,3,4,2], maxDiff = 3, queries = [[0,3],[2,4]]

// Output: [1,1]

// Explanation:

// The resulting graph is:



// Query	Shortest Path	Minimum Distance
// [0, 3]	0 → 3	1
// [2, 4]	2 → 4	1
// Thus, the output is [1, 1].

// Example 2:

// Input: n = 5, nums = [5,3,1,9,10], maxDiff = 2, queries = [[0,1],[0,2],[2,3],[4,3]]

// Output: [1,2,-1,1]

// Explanation:

// The resulting graph is:



// Query	Shortest Path	Minimum Distance
// [0, 1]	0 → 1	1
// [0, 2]	0 → 1 → 2	2
// [2, 3]	None	-1
// [4, 3]	3 → 4	1
// Thus, the output is [1, 2, -1, 1].

// Example 3:

// Input: n = 3, nums = [3,6,1], maxDiff = 1, queries = [[0,0],[0,1],[1,2]]

// Output: [0,-1,-1]

// Explanation:

// There are no edges between any two nodes because:

// Nodes 0 and 1: |nums[0] - nums[1]| = |3 - 6| = 3 > 1
// Nodes 0 and 2: |nums[0] - nums[2]| = |3 - 1| = 2 > 1
// Nodes 1 and 2: |nums[1] - nums[2]| = |6 - 1| = 5 > 1
// Thus, no node can reach any other node, and the output is [0, -1, -1].

 

// Constraints:

// 1 <= n == nums.length <= 105
// 0 <= nums[i] <= 105
// 0 <= maxDiff <= 105
// 1 <= queries.length <= 105
// queries[i] == [ui, vi]
// 0 <= ui, vi < n



// TODO ==> problem 09 : ---------------------------------------->------------------>