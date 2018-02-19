/*
Given a non-empty array of numbers, a0, a1, a2, … , an-1, where 0 ≤ ai < 231.

Find the maximum result of ai XOR aj, where 0 ≤ i, j < n.

Could you do this in O(n) runtime?

Input: [3, 10, 5, 25, 2, 8]

Output: 28

Explanation: The maximum result is 5 ^ 25 = 28.
*/
var findMaximumXOR = function(nums) {
    let max = 0;
    let mask = 0;
    for(let i = 31; i >= 0; i--){
        let set = new Set();
        mask |= (1 << i);
        for(num of nums){
            set.add(num & mask);
        }

        let candidateMax = max | (1 << i);
        for(prefix of set){
            if(set.has(prefix ^ candidateMax)){
                max = candidateMax;
                break;
            }
        }
    }
    return max;
};
