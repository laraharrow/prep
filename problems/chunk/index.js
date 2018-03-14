// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	// create an empty array to store chunks
	let chunks = [];
	// create a var to keep track of index
	let i = 0;
	// while index is less then given array length
	while (i < array.length) {
		// push a slice of length equal to size from given array to chunks
		chunks.push(array.slice(i, (i + size)));
		// add size to index
		i += size;
	}	
	return chunks	
}

console.log(chunk([1, 2, 3, 4, 5], 2));

module.exports = chunk;

// function chunk(array, size) {
// 	// create an array to store chunks
// 	let chunks = [];
// 	// loop throu the given array
// 	for (e of array) {
// 		// store last element of chunks in a variable
// 		const last = chunks[chunks.length - 1];
// 		// check if chuncks in empty or if the last element in chunks has
// 		// length equal to size
// 		if (!last || last.length === size) {
// 			// create a new inner array with e as its value
// 			// push inner array to chunks
// 			chunks.push([e]);
// 		} else {
// 		// in case inner array exists and has a length less the size
// 		// add e to it
// 			last.push(e);		
// 		}
// 	}
// 	return chunks;
// }
