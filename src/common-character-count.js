const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	let characterCount = 0
	let str1 = s1.split('')
	let str2 = s2.split('')
	for (let i = 0; i < str1.length; i++) {
		for (let j = 0; j < str2.length; j++) {
			if (str1[i] === str2[j]) {
				console.log(i, `:`, j)
				str1.splice(i, 1)
				str2.splice(j, 1)
				i--
				characterCount += 1
			}
		}
	}
	return characterCount
}

module.exports = {
	getCommonCharacterCount
};
