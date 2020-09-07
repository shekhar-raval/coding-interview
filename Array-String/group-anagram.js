const groupAnagrams = (strs) => {
	const map = new Map();
	for (const word of strs) {
		const sortedWord = word.split('').sort().join('');
		if (map.has(sortedWord)) {
			map.get(sortedWord).push(word);
		} else {
			map.set(sortedWord, [word]);
		}
	}
	return [...map.values()];
}

const groupAnagramPrimeNumsMultiply = (strs) => {
	const prime = {
		'a': 2, 'b': 3, 'c': 5, 'd': 7, 'e': 11, 'f': 13, 'g': 17,
		'h': 19, 'i': 23, 'j': 29, 'k': 31, 'l': 37, 'm': 41, 'n': 43,
		'o': 47, 'p': 53, 'q': 59, 'r': 61, 's': 67, 't': 71, 'u': 73,
		'v': 79, 'w': 83, 'x': 89, 'y': 97, 'z': 101
	}
	const map = new Map();
	for (const string of strs) {
		let product = 1;
		for (const char of string) {
			product = prime[char] * product;
		}
		if (map.has(product)) {
			map.get(product).push(string);
		} else {
			map.set(product, [string]);
		}
	}
	return [...map.values()];
}