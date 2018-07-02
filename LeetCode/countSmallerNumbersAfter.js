/*
  You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].
*/

var countSmaller = function(nums) {
    let res = [];
    if(nums === null || nums.length === 0){
        return [];
    }
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    for(let i = 0; i < nums.length; i++){
        //finding MIN to start Binary Index Tree at 1
        min = (nums[i] < min) ? nums[i] : min;
    }
    let nums2 = [];
    for(let i = 0; i < nums.length; i++){
        //create new array with > 0 nums (in case nums are negative)
        nums2[i] = nums[i] - min + 1;
        //find max to create large enough array, max + 1 since we ignore index 0
        max = Math.max(nums2[i], max);
    }
    // initialize BIT 0 filled array
    let tree = new Array(max + 1).join('0').split('').map(parseFloat);
    for(let i = nums2.length-1; i >= 0; i--){
        //start from end of nums2 array and get sum of indexs in the BIT
        //should be [0,0,0,0,...,0] initially since were at end of array
        //use unshift instead of push since were starting from end of array
        res.unshift(get(nums2[i]-1, tree));
        //update the BIT starting from nums[i]
        update(nums2[i], tree);
    }
    return res;
};

var get = function(i, tree){
    //returns sum of all i-th element in tree starting from the end and moving backwards;
    let num = 0;
    while(i > 0){
        num += tree[i];
        i -= i & (-i);
    }
    return num;
}

var update = function(i, tree){
    while(i < tree.length){
      //update tree by adding 1 to each relavent BIT index starting at i
        tree[i]++;
        i += i & (-i);
    }
}
