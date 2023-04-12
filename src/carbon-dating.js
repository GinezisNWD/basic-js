const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
	let modernActivity = 15;
	let halfLifePeriod = 5730;

	if (!Number(sampleActivity) || typeof (sampleActivity) !== 'string') {
		return false
	}

	let result = Math.ceil((halfLifePeriod * Math.log(modernActivity / (Number(sampleActivity)))) / 0.693);
	if (result == Infinity || result == -Infinity || isNaN(result) || result < 0) {
		return false
	}

	return result
}

module.exports = {
	dateSample
};
