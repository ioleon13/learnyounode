/*module.exports = function(operation, num) {
	for (var i = 0; i < num; i++) {
		operation();
	}
};*/

function repeat(operation, num) {
	if (num <= 0) return;
	operation();
	return repeat(operation, --num);
}

module.exports = repeat;