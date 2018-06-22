/*
 * Returns true if the given string is a palindrome. Otherwise, returns false.
 */
function palindrome(str) {
    const cleanStr = str.replace(/[^a-z0-9]/ig, "").toLowerCase();
    const chars = cleanStr.split("");
    // base case
    if (str.length < 2) return true;
    // recursive case
    return (chars[0] === chars[chars.length - 1] && palindrome(chars.slice(1, chars.length - 1).join("")));
}
