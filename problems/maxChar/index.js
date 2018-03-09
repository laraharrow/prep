// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	
	if (str.length === 1) {
		return str;
	}

	let char = {};
	let val = 0;
	let toReturn = '';
	for (let elem of str) {
		if (char[elem]) {
			char[elem]++
			if (char[elem] > val) {
				val = char[elem];
				toReturn = elem;
			}
		} else {
			char[elem] = 1;
		}
	}
	return toReturn;
}

maxChar("a");

module.exports = maxChar;
