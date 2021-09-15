var  longestSubstring = function(s) {

    let output = {};
    let count = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        let lastChar = s[end];
        if( lastChar in output){
            start = Math.max(start, output[lastChar] + 1);
        }
        output[lastChar] = end;
        count = Math.max(count, end - start + 1);
    }
    return count;
}

let result = longestSubstring('abcabcbb');
console.log(result)