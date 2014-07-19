module.exports = function arrayMap(arr, fn) {
	var ret = [];
	arr.reduce(function(preElement, curElement) {
		ret.push(fn(curElement));
	}, 0);

	/* official resolution@{
	return arr.reduce(function(retArr, curItem, index, arr) {
		return retArr.concat(fn(curItem, index, arr));
	}, []);
	@}*/
	return ret;
}