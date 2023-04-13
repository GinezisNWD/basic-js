const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	const number = Array.from(n.toString())
	const array = []

	for (let i = 0; i < number.length; i++) {
		const cutNumber = new Array(...number)
		cutNumber.splice(i, 1)
		array.push(+cutNumber.join(''))
	}


	return Math.max(...array)
}

module.exports = {
	deleteDigit
};
