// Find the length of the longest substring without repeating characters


let longestSubstring= (s) => {
    let maxLength = 0, start = 0, end = {}
    for (let i = 0; i < s.length; i++) {
        if (end[s[i]] >= start) {
            start = end[s[i]] + 1
        }
        end[s[i]] = i
        maxLength = Math.max(maxLength, i - start + 1)
    }
    return maxLength
}

console.log(longestSubstring("abcabcbb"))
