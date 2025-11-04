/**
 * @param {string} str
 * @return {boolean}
 * 
 */

export default function isStringPalindrome(str) {
    str = str.toLowerCase();
    let regex = /[a-zA-Z0-9]/;
    const isAlphaNumberic = (c) => regex.test(c);

    for (let i = 0, j = str.length - 1; i < j;) {
        let left = str[i];
        let right = str[j];

        if (!isAlphaNumberic(left)) {
            i++;
            continue;
        }
        if (!isAlphaNumberic(right)) {
            j--;
            continue;
        }
        if (left !== right) return false;
        i++;
        j--;
    }

    return true;
}