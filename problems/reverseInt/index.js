// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

	// reverse n - array of strings per element in n
	let reversed = parseInt(n.toString().split('').reverse().join(''));
	// add negative sign if needed
	return reversed * Math.sign(n);
}

console.log(reverseInt(-90));

module.exports = reverseInt;
