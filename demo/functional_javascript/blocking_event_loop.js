function repeat(operation, num) {
	if (num <= 0) return;

	operation();
	
	if (num % 100 === 0) {
		setTimeout(function() {
			repeat(operation, --num);
		});
	} else {
		repeat(operation, --num)
	}
}
    
module.exports = repeat