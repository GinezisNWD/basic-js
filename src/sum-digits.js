const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
	let num = String(n).split('')
	let sum = 0
	for (let i = 0; i < num.length; i++) {
		sum = sum + Number(num[i])
	}
	let newNum = String(sum).split('')
	let result
	if (newNum.length !== 1) {
		console.log(`нужен еще один круг`)
		return getSumOfDigits(sum)
	} else if (newNum.length === 1) {
		result = sum
		return result
	}
}

module.exports = {
	getSumOfDigits
};
