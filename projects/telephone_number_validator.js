/*
 * Returns true if the passed string looks like a valid US phone number.
 * @param {String} str - String representation of a US phone number.
 */
function telephoneCheck(str) {
    let isValid = true;
    let numDigits = str.match(/\d/g).length;
    // telephone number too short or too long
    if (numDigits < 10 || numDigits > 11) {
        isValid = false;
        console.log("Telephone number must be 10 digits long (+1 for country code)");
    }
    // unbalanced parenthases
    let leftPar = /\(/g;
    let rightPar = /\)/g;
    if ((str.search(leftPar) > -1 && str.search(rightPar) === -1) || (str.search(leftPar) === -1 && str.search(rightPar) > -1)) {
        isValid = false;
        console.log("Missing parentheses");
    }
    if (str.search(leftPar) > -1 && str.search(rightPar) > -1) {
        if (!(str.match(leftPar).length === str.match(rightPar).length)) {
            isValid = false;
            console.log("Missing parentheses");
        }
    }
    // validates telephone format using regular expressions
    let optCountryCode = /^1?/;
    let optSeparator = /[\s|\-|\)|\(]*/;
    let areaCode, prefix;
    areaCode = prefix = /\d{3}/;
    let lineNumber = /\d{4}$/;
    let re = new RegExp(optCountryCode.source + optSeparator.source + areaCode.source + optSeparator.source + prefix.source + optSeparator.source + lineNumber.source);
    if (!re.test(str)) {
        isValid = false;
        console.log("Invalid phone number");
    }
    return isValid;
}
