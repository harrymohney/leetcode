/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let j = 0;
    for(let i = 0; i < s.length; i++) {
        while(j < t.length && t[j] !== s[i]) {
            j++;
        }
        if(j == t.length) {
            return false;
        }
        j++;
    }
    return true;
};