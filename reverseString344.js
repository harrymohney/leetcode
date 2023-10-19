function reverseString(s) {
    // Initialize left pointer (left) to 0
let left = 0
    // Initialize right pointer (right) to length of s - 1
let right = s.length - 1
    // While left < right:
while (left < right){
    //     Swap s[left] and s[right] 
    let temp = s[left]
    s[left] = s[right]
    s[right] = temp
    // Swap characters at left and right pointers

    //     Increment left by 1
left++
    //     Decrement right by 1
right--
}
// Return the modified string s
return s
};