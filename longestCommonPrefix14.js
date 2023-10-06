/*
let strs = ['flower', 'flow', 'flight']
for (let i = 0; i < strs.length; i++){
        for (let j = 0; j < strs[i].length; j++) {
            console.log(strs[i][j]);
        }
        
        // console.log(strs[i]); modify i = in for statement to start from different index
    };
    */
// for (let i = strs[0].length - 1; i > -1; i--) to iterate in reverse
// console.log(strs[0].substring(3, 6));
// console.log(strs[0].indexOf('w'));
// console.log(strs.length);
// console.log(strs[0].length);

var longestCommonPrefix = function(strs) { 
    if (!strs.length) {
       return '';
    }
    let prefix = strs[0];
    for (let i = 0; i < strs[0].length; i++){
        for (let j = 1; j < strs.length; j++) {
            if (i === strs[j].length || strs[j][i] !== strs[0][i]) {
                prefix = prefix.slice(0, i);
                
            }
        }
        return prefix;
    }
};

var longestCommonPrefix = function(strs) {
    if (!strs.length) {
       return '';
    }
    let prefix = strs[0];
for (let i = 0; i < strs[0].length; i++){
    for (let j = 1; j < strs.length; j++) {
        if (strs[j][i] !== strs[0][i]) {
            prefix = prefix.slice(0, i);
        }
    }

}
        return prefix;
};