/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString();
    let str = [...x].reverse().join('');
    return (x===str);
};

console.log(isPalindrome(272));