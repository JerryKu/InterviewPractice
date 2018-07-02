/* 744:
Given a list of sorted characters letters containing only lowercase letters, and given a target letter target, find the smallest element in the list that is larger than the given target.

Letters also wrap around. For example, if the target is target = 'z' and letters = ['a', 'b'], the answer is 'a'.

letters has a length in range [2, 10000].
letters consists of lowercase letters, and contains at least 2 unique letters.
target is a lowercase letter.
*/
const nextGreatestLetter = function(letters, target) {
    let mid = binarySearch(letters, 0, letters.length-1, target);
    if(mid === letters.length - 1) {
        return letters[0]
    }else if(mid === -1){
        return letters[0];
    }else if(target.charCodeAt(0) < letters[mid].charCodeAt(0)){
        return letters[mid];
    }else{
        return letters[mid+1];
    }
};
const binarySearch = function(letters, l, r, target){
    let mid = Math.floor((l+r)/2)
    while(r >= l){
        if(letters[mid].charCodeAt(0) > target.charCodeAt(0)){
            r = mid-1;
            mid = Math.floor((l + r) /2);
        }else{
            l = mid+1;
            mid = Math.floor((l+r)/2)
        }
    }
    return mid;
}
