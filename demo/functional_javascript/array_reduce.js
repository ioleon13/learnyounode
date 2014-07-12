function countWords(inputWords) {
	var ret = {};
	inputWords.reduce(function(countMap, curWord) {
		if (ret[curWord] === undefined) {
			ret[curWord] = 1;
		} else {
			ret[curWord]++;
		}

		/*
		ret[curWord] = ++ret[curWord] || 1;
		*/
	}, ret);

	return ret;
}

module.exports = countWords