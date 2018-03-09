// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// using method reverse
	function reverse(str) {
		return str.split('').reverse().join('');
	}
reverse("str");

// using a loop
	// function reverse(str) {
	// 	let reversed = '';
	// 	for (let char of str) {
	// 		reversed = char + reversed;
	// 	}
	// 	return reversed;
	// }

// using reduce
// function reverse(str) {
// 	return str.split('').reduce((rev, char) => char + rev, '')
// }


module.exports = reverse;
