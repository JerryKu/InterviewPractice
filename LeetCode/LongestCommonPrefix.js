/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string

Input: ["flower","flow","flight"]
Output: "fl" */

const longestCommonPrefix = function(strs) {
    let ans = strs[0] || '';
    for(let i = 1; i < strs.length; i++){
        ans = LCP(strs[i], ans);
        if(ans === "") return "";
    }
    return ans;
};

const LCP = function(string, currLCP){
    let LCP = "";
    for(let i = 0; i < string.length; i++){
        if(string.charAt(i) === currLCP.charAt(i)){
            LCP += string.charAt(i);
        }else{
            break;
        }
    }
    return LCP;
};
