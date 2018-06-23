/*
 * Converts the given number (up to 5000) into a roman numeral.
 */
function convertToRoman(num) {
    const symbols = {
        "ones": ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        "tens": ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        "hundreds": ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        "thousands": "M"
    }
    const thousands = symbols["thousands"].repeat(Math.floor(num / 1000));
    const hundreds = symbols["hundreds"][Math.floor((num % 1000) / 100)];
    const tens = symbols["tens"][Math.floor(((num % 1000) % 100) / 10)];
    const ones = symbols["ones"][Math.floor(((num % 1000) % 100) % 10)];
    if (num >= 5000) {
        return "Number is 5000 or above";
    }
    return thousands + hundreds + tens + ones; 
}
