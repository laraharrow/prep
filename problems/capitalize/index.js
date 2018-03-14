// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	let upperCase = str[0].toUpperCase();
	for (let i = 1; i < str.length; i++) {
		if (str[i - 1] === ' ') {
			upperCase += str[i].toUpperCase();
		} else {
			upperCase += str[i];
		}
	}
	return upperCase;
}

console.log(capitalize('a short sentence'));

module.exports = capitalize;


// array solution
function capitalize(str) {
	let words = [];
	
	for (word of str.split(' ')) {
		words.push(word[0].toUpperCase() + word.slice(1))
	}
	return words.join(' ');
}
