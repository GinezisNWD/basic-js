const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	const result = []

	let block = []
	let counter = 1

	for (let i = 0; i < str.length; i++) {
		block[1] = str[i];
		block[0] = counter

		if (str[i] === str[i + 1]) {
			counter++
		}
		if (str[i] !== str[i + 1]) {

			result.push(block)
			block = new Array()
			counter = 1
			continue
		}
	}
	result.forEach(elem => elem[0] === 1 ? elem[0] = '' : elem)

	return result.map(elem => elem.join('')).join('')
}

module.exports = {
	encodeLine
};
