const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
	if (!(arr instanceof Array)) {
		throw Error(`'arr' parameter must be an instance of the Array!`);
	}
	const copyArr = arr.slice()
	const result = []
	for (let i = 0; i < copyArr.length; i++) {
		if (copyArr[i] === '--discard-next') {
			console.log(`нашел команду убрать некст`)
			i++
			continue
		};
		if (copyArr[i] === '--discard-prev') {
			if (copyArr[i - 2] === '--discard-next' || i < 1) {
				console.log(`Будет ошибка`)
				continue
			}

			console.log(`нашел команду убрать прев`)
			result.pop()
			continue
		};
		if (copyArr[i] === '--double-next') {
			if (i > copyArr.length - 2) {
				console.log(`Будет ошибка`)
				continue
			}
			console.log(`нашел команду повторить некст`)
			result.push(copyArr[i + 1])
			continue
		};
		if (copyArr[i] === '--double-prev') {
			if (copyArr[i - 2] === '--discard-next' || i < 1) {
				console.log(`Будет ошибка`)
				continue
			}
			console.log(`нашел команду повторить прев`)
			result.push(copyArr[i - 1])
			continue
		};
		// if (typeof copyArr[i] === 'undefined') {
		// 	console.log(`нашел дырку`)
		// 	continue
		// };
		result.push(copyArr[i])
	}


	console.log('начало')
	console.log(copyArr)
	console.log('результат')
	console.log(result)
	return result
}

module.exports = {
	transform
};
