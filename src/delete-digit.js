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
	let rep = n.toString().split('').sort((a, b) => b - a);
	rep.pop();
	let result = rep.join('');
	return +result

}

module.exports = {
	deleteDigit
};
