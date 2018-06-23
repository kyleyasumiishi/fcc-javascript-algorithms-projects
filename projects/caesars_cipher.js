/*
 * Returns a decoded string from the given ROT13 encoded string.
 * @param {String} str - An ROT13 encoded string (all letters uppercase).
 */
function rot13(str) { 
    const chars = str.split("");
    let decoded = "";
    chars.forEach(char => {
        const charCode = char.codePointAt(0);
        if (charCode >= 65 && charCode <= 90) {
            let newCharCode = charCode - 13;
            if (newCharCode < 65) {
                newCharCode = 91 - (65 - newCharCode);
            }
            decoded += String.fromCharCode(newCharCode);
        } else {
            decoded += char;
        }
    });
    return decoded;
}
