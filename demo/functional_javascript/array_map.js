var double = function(num) {
	return num*2;		
}

function doubleAll(numbers) {
	return numbers.map(double);
};

module.exports = doubleAll;